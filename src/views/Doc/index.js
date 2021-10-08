import {useCallback, useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import Quill from "quill"
import QuillCursors from 'quill-cursors';
import "quill/dist/quill.snow.css"
import "./index.scss"
import {io} from "socket.io-client"
import cursorSVG from '../../public/cursor.png'
import {getDoc, getDocAuth, patchDoc} from "../../api/doc";
import {useSession} from "react-use-session";
import jwt_decode from "jwt-decode";
import ShareModal from "./components/ShareModal";
import * as React from "react";
import {v4 as uuidV4} from 'uuid'
import Header from "./components/Header";
import Error from "../../components/Error";
import {baseURL} from "../../api";

const TOOLBAR_OPTIONS = [
    [{header: [1, 2, 3, 4, 5, 6, false]}],
    [{font: []}],
    [{list: "ordered"}, {list: "bullet"}],
    ["bold", "italic", "underline"],
    [{color: []}, {background: []}],
    [{script: "sub"}, {script: "super"}],
    [{align: []}],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

const Index = () => {
    const {id: docId} = useParams()
    const history = useHistory()
    const {session, save, clear} = useSession("docs-demo-token")
    const [doc, setDoc] = useState()
    const [cursor, setCursor] = useState()
    const [users, setUsers] = useState([])
    const [userCursor, setUserCursor] = useState([])
    const [userSelection, setUserSelection] = useState([])
    const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [editable, setEditable] = useState(false)
    const [lastUpdated, setLastUpdated] = useState({updated: '', User: {name: ''}})
    const [errorVisible, setErrorVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    let login_user
    if (session) {
        try {
            login_user = jwt_decode(session)
        } catch (e) {
            login_user = session
        }
    } else {
        login_user = save({id: uuidV4(), name: 'Guest'})
    }

    useEffect(() => {
        if (errorMsg !== null) {
            setErrorVisible(true)
        }
    }, [errorMsg])

    const detectCursor = (e) => {
        if (e.pageX && e.pageY) {
            setCursor({
                x: e.pageX,
                y: e.pageY,
                width: window.innerWidth,
                height: window.innerHeight
            })
        } else {
            const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0;
            setCursor({
                x: e.clientX + scrollX,
                y: e.clientY + scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    }

    const getDocInfo = async () => {
        try {
            const res = await getDoc(docId)
            const resAuth = await getDocAuth(docId)
            setDoc({...res, DocAuths: resAuth})
        } catch (e) {
            setErrorMsg(e.response.data.msg)
            if (e.response.status === 401) {
                history.push('/401')
            } else {
                history.push('/404')
            }
        }
    }

    const onChangeTitle = async (value, save) => {
        setDoc(prevState => ({...prevState, name: value}))
        if (save) {
            try {
                const docUpdated = await patchDoc(docId, {name: value})
                setDoc(docUpdated)
            } catch (e) {
                setErrorMsg(e.response.data.msg)
            }
        }
    }

    const logout = () => {
        clear()
        history.go(0)
        history.push('/login')
    }

    useEffect(() => {
        if (!socket || !quill) return
        socket.once('load-document', ({content, editable, updated, User}) => {
            quill.setContents(content)
            setEditable(editable)
            setLastUpdated({updated, User})
            if (editable) {
                quill.enable()
            }
        })
        socket.emit('get-document')
    }, [socket, quill])

    useEffect(() => {
        if (!socket) return
        const handler = (value) => {
            setUsers(value)
        }
        socket.on('receive-users', handler)
        const handlerDate = (value) => {
            setLastUpdated(value)
        }
        socket.on('receive-updated', handlerDate)
        return () => {
            socket.off('receive-users', handler)
            socket.off('receive-updated', handlerDate)

        }
    }, [socket])

    useEffect(() => {
        if (!socket || !quill) return
        const handler = ({delta}) => {
            quill.updateContents(delta)
        }
        socket.on('receive-changes', handler)
        return () => {
            socket.off('receive-changes', handler)
        }
    }, [socket, quill])

    useEffect(() => {
        if (!socket || !quill) return
        const handler = (delta, oldDelta, source) => {
            if (source !== "user") return
            const getInsert = quill.getContents()
            socket.emit("send-changes", {delta: delta, data: getInsert})
        }
        quill.on('text-change', handler)
        const selectionHandler = (range, oldRange, source) => {
            if (source !== "user") return
            if (range) {
                socket.emit("send-selection-changes", {range: range, time: new Date()})
            }
        }
        quill.on('selection-change', selectionHandler);
        return () => {
            quill.off('text-change', handler)
            quill.off('selection-change', selectionHandler);
        }
    }, [socket, quill])

    useEffect(() => {
        if (!socket || !cursor) return
        socket.emit("send-cursor-changes", {cursor: cursor, time: new Date()})
    }, [socket, cursor])

    useEffect(() => {
        if (!socket || !quill || !userSelection) return
        const handler = (cursorList) => {
            setUserSelection(cursorList)
        }
        socket.on('receive-selection-changes', handler)
        const selection = quill.getModule('cursors');
        selection.clearCursors()
        userSelection.filter(item => item.id !== login_user.id).forEach((user) => {
            selection.createCursor(user.id, user.name, user.color);
            selection.moveCursor(user.id, user.range)
        })
        return () => {
            socket.off('receive-selection-changes', handler)
        }
    }, [socket, quill, userSelection, login_user])

    useEffect(() => {
        if (!socket || !userCursor) return
        const handler = (cursorList) => {
            setUserCursor(cursorList)
        }
        socket.on('receive-cursor-changes', handler)
        return () => {
            socket.off('receive-cursor-changes', handler)
        }
    }, [socket, userCursor])


    useEffect(() => {
        let s = null

        async function getDocConnect() {
            s = io(baseURL, {query: {uuid: docId}, auth: {token: session}});
            setSocket(s)
            const handler = (error) => {
                console.log(error)
                if (error.status === '404') return history.push('/404')
            }
            s.on('error', handler)
            await getDocInfo()
        }

        getDocConnect()
        return () => {
            if (s) {
                s.disconnect()
            }
        }
    }, [docId, history, session])

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper === null) return

        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        Quill.register('modules/cursors', QuillCursors);
        const q = new Quill(editor, {
            theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS, cursors: true},
        })
        q.disable()
        q.setText('Loading...')
        setQuill(q)
    }, [])

    return <div>
        <Error open={errorVisible} setOpen={setErrorVisible} error={errorMsg}/>
        <ShareModal modalVisible={modalVisible} setModalVisible={setModalVisible} doc={doc} setDoc={setDoc}
                    getDocInfo={getDocInfo}/>
        <Header editable={editable} users={users} login_user={login_user} session={session}
                setModalVisible={setModalVisible} doc={doc} lastUpdated={lastUpdated}
                onChangeTitle={onChangeTitle}
                quill={quill}
                logout={logout}/>
        <div className="wrapper">
            {userCursor.filter(item => item.id !== login_user.id).map((item) =>
                <div className="cursor" style={
                    {
                        top: item.cursor.y + 'px',
                        left: item.cursor.x * (window.innerWidth / item.cursor.width) + 'px'
                    }
                } key={item.id}>
                    <img src={cursorSVG} width="18" height="18" alt={item.user}/>
                    <div style={{
                        borderRadius: '0.5em',
                        background: item.color,
                        fontSize: '0.75em',
                        color: 'white',
                        margin: '0 5px',
                        padding: '3px 5px'
                    }}>{item.name}</div>
                </div>)}
            <div className="editor" ref={wrapperRef} onMouseMove={detectCursor}/>
        </div>
    </div>
}
export default Index