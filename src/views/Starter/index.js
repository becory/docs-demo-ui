import Header from "./components/Header";
import Context from "./components/Context";
import {useEffect, useState} from "react";
import {useSession} from "react-use-session";
import {getDocList} from "../../api/doc";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Error from "../../components/Error";

function Starter() {
    const history = useHistory()
    const [fileList, setFileList] = useState([])
    const [keyword, setKeyword] = useState()
    const [errorVisible, setErrorVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const {session, clear} = useSession("docs-demo-token")

    try {
        jwt_decode(session)
    } catch (e) {
        setErrorMsg(e.message)
        clear()
        history.push('/')
        history.replace("/Login")
    }

    const logout = () => {
        clear()
        history.push('/')
        history.replace("/Login")
    }

    useEffect(() => {
        async function fetchData() {
            if (session) {
                try {
                    const res = await getDocList({keyword})
                    setFileList(res)
                } catch (e) {
                    setErrorMsg(e.response.data.msg)
                }
            }
        }

        fetchData()
    }, [keyword, clear, history, session])

    const getKeyword = (value) => {
        setKeyword(value)
    }

    useEffect(() => {
        if (errorMsg !== null) {
            setErrorVisible(true)
        }
    }, [errorMsg])

    return <div>
        <Error open={errorVisible} setOpen={setErrorVisible} error={errorMsg}/>
        <Header onSearchKeyword={getKeyword} logout={logout}>
            <Context fileList={fileList}/>
        </Header>
    </div>
}

export default Starter