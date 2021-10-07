import {Link} from "react-router-dom";
import {Avatar, AvatarGroup, Button, Icon, Tooltip} from "@mui/material";
import dayjs from "dayjs";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import CreateModal from "../../Starter/components/CreateModal";
import {saveAs} from 'file-saver';
import * as quillToWord from 'quill-to-word';

function Header({
                    editable,
                    users,
                    login_user,
                    session,
                    setModalVisible,
                    doc,
                    logout,
                    onChangeTitle,
                    lastUpdated,
                    quill
                }) {
    const [width, setWidth] = useState(0)
    const [menuVisible, setMenuVisible] = useState({file: false, edit: false})
    const [createModal, setCreateModal] = useState(false)
    const title = useRef()
    const inputTitle = useRef()


    useEffect(() => {
        setWidth(title.current.offsetWidth);
    }, [doc]);

    const formatName = (value) => {
        return value.split(' ').map(letter => letter.charAt(0).toUpperCase())
    }

    const getUserColor = (userList, login_user) => {
        const user = userList.find(user => user.id === login_user.id)
        if (user) {
            return user.color
        }
        return null
    }

    const handleClickMenu = (menuId) => {
        setMenuVisible(prevState => ({...prevState, ...toggleMenu(menuVisible, menuId)}))
    }

    const toggleMenu = (menuState, menuId) => {
        const result = {}
        Object.keys(menuState).forEach(menu => {
            if (menuId === menu) {
                result[menu] = !menuState[menu]
            } else {
                result[menu] = false
            }
        })
        return result
    }

    const exportToWord = async () => {
        const quillDelta = quill.getContents();
        const quillToWordConfig = {
            exportAs: 'blob',
            paragraphStyles: {
                normal: {
                    run: {
                        color: '#000000'
                    }
                }
            }
        };
        const docFromQuill = await quillToWord.generateWord(quillDelta, quillToWordConfig);
        saveAs(docFromQuill, `${doc.name}-${new Date()}.docx`)
    }

    return <header className="header">
        <Link to="/" className="cursor-pointer">
            <Icon size="3xl" color="primary" style={{fontSize: "2.5rem"}}>description</Icon>
        </Link>
        <div className="title-menu">
            <h2 className="text-2xl">
                <span className="hide-span" ref={title}>{(doc) ? doc.name : null}</span>
                {(doc) ?
                    ((doc.creatorId ===login_user.id || doc.DocAuths.map(user=> user.id).includes(login_user.id)) ?
                        <Tooltip title="Rename">
                            <input value={doc.name} className="mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   style={{width}} ref={inputTitle}
                                   onChange={(e) => onChangeTitle(e.target.value, false)}
                                   onBlur={(e) => onChangeTitle(e.target.value, true)}
                            />
                        </Tooltip>
                        : doc.name)
                    : null}
            </h2>
            <div className="menu-information">
                <ul className="menu">
                    <li className="item"><span onClick={() => handleClickMenu("file")}>File</span>
                        <ul className={classNames({
                            "block": menuVisible["file"],
                            "hidden": !menuVisible["file"]
                        }, "submenu")}>
                            <li className="sub-item" onClick={() => setCreateModal(true)}>
                                New Document
                            </li>
                            <li className="sub-item" onClick={() => {
                                inputTitle.current.focus()
                                handleClickMenu("file")
                            }}>
                                Rename
                            </li>
                            <li className="sub-item" onClick={exportToWord}>
                                Export to .docx
                            </li>
                            <li className="sub-item" onClick={() => window.print()}>
                                Print
                            </li>
                        </ul>
                    </li>
                    <li className="item"><span onClick={() => handleClickMenu("edit")}>Edit</span>
                        <ul className={classNames({
                            "block": menuVisible["edit"],
                            "hidden": !menuVisible["edit"]
                        }, "submenu")}>
                            <li className="sub-item" onClick={() => {
                                quill.history.undo()
                                handleClickMenu("edit")
                            }}>
                                Undo
                            </li>
                            <li className="sub-item" onClick={() => {
                                quill.history.redo()
                                handleClickMenu("edit")
                            }}>
                                Redo
                            </li>
                        </ul>
                    </li>
                    <li className="item disable"><span>View</span></li>
                    <li className="item disable"><span>Insert</span></li>
                    <li className="item disable"><span>Format</span></li>
                    <li className="item disable"><span>Tools</span></li>
                </ul>
                <div className="info">
                    Last Updated:&nbsp;
                    {dayjs(lastUpdated.updated).fromNow()}{(lastUpdated.User.name) ? `(${lastUpdated.User.name})` : null}
                </div>
            </div>
            <CreateModal modalVisible={createModal} setModalVisible={setCreateModal}/>
        </div>
        <div className="user">
            <AvatarGroup max={2}>
                {users.filter(user => user.id !== login_user.id).map(user => <Avatar
                    sx={{bgcolor: user.color}}
                    key={user.id}>{formatName(user.name)}</Avatar>)}
            </AvatarGroup>
            {(editable) ? <Button variant="contained"
                                  color="primary"
                                  size="small"
                                  className="mx-2 hidden md:inline-flex h-8"
                                  onClick={() => setModalVisible(true)}
                                  startIcon={<Icon>people</Icon>}>
                Share
            </Button> : <Button variant="outlined"
                                color="primary"
                                className="mx-2 hidden md:inline-flex h-8"
                                startIcon={<Icon>visibility</Icon>}>
                Read
            </Button>} &nbsp;
            <Tooltip title="Logout">
                <Avatar alt={login_user.name} sx={{
                    width: 48,
                    height: 48,
                    bgcolor: getUserColor(users, login_user)
                }}
                        onClick={logout}>{(session) ? formatName(login_user.name) : null}</Avatar>
            </Tooltip>
        </div>
    </header>
}

export default Header