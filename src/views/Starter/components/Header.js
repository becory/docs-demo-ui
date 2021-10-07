import Icon from '@mui/material/Icon'
import {useSession} from "react-use-session";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";
import {Avatar, Tooltip} from "@mui/material";
import * as React from "react";

const Header = ({children, onSearchKeyword, logout}) => {
    const {session, clear} = useSession("docs-demo-token")
    const history = useHistory()
    let login_user = {}

    try {
        if (session) login_user = jwt_decode(session)
    } catch (e) {
        clear()
        history.push('/')
    }

    const formatName = (value) => {
        if (value) {
            return value.split(' ').map(letter => letter.charAt(0).toUpperCase())
        } else {
            return ''
        }
    }

    return <div>
        <div className="sticky top-0 flex items-center px-5 py-3 shadow-md bg-white">
            <Icon size="3xl" color="primary" style={{fontSize: "2.5rem"}}>description</Icon>
            <h1 className="hidden md:inline-flex ml-2 text-gray-700 text-xl">Docs Demo</h1>
            <div
                className="text-gray-400 mx-5 md:mx-10 flex flex-grow items-center px-3 py-2 bg-gray-200 rounded-lg focus-within:text-gray-600 focus-within:bg-white focus-within:shadow-md">
                <Icon size="3xl" className="text-gray-700" style={{fontSize: "1rem"}}>search</Icon>
                <input type="text" placeholder="Search"
                       className="flex-grow mx-2 px-3 text-base bg-transparent outline-none"
                       onChange={(e) => onSearchKeyword(e.target.value)}/>
            </div>
            <Tooltip title="Logout">
                <Avatar
                    alt={login_user.name}
                    sx={{
                        width: 48,
                        height: 48,
                        bgcolor: login_user.color
                    }}
                    onClick={logout}>{(session) ? formatName(login_user.name) : null}</Avatar>
            </Tooltip>
        </div>
        {children}
    </div>
}
export default Header