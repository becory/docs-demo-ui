import {Alert, Button, Icon, Input, Dialog, DialogContent, DialogActions, DialogTitle} from "@mui/material";
import {useSession} from "react-use-session";
import {useState} from "react";
import {login} from "../api/auth";
import {postUserRegister} from "../api/user";
import {checkForm} from "../utils/form";
import {useHistory} from "react-router-dom";

function Login() {
    const {save} = useSession("docs-demo-token")
    const history = useHistory()
    const [loginForm, setLoginForm] = useState({username: '', password: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const [alert, setAlert] = useState({color: '', on: '', msg: '', data: []})
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        password_check: '',
        name: '',
        email: ''
    })

    const onLogin = async () => {
        try {
            setAlert({color: 'info', on: '', msg: '', data: []})
            await checkForm(loginForm)
            const res = await login(loginForm)
            if (res.token) {
                save(res.token)
                history.go(0)
                history.push('/home')
            }
        } catch (e) {
            const err = e.message.split('|')
            if (e.response && e.response.data.msg) {
                setAlert({color: 'error', on: 'loginForm', msg: 'Error', data: [ e.response.data.msg]})
            } else if (err.length >= 1) {
                setAlert({color: 'error', on: 'loginForm', msg: 'Field Required', data: err})
            } else {
                setAlert({color: 'error', on: 'loginForm', msg: 'Error', data: [e.message]})
            }
        }
    }

    const onRegister = async () => {
        try {
            setAlert({color: 'info', on: '', msg: '', data: []})
            await checkForm(registerForm)
            if (registerForm.password_check === registerForm.password) {
                await postUserRegister(registerForm)
                setAlert({color: 'success', on: 'loginForm', msg: 'Sign Up Success', data: []})
                setModalVisible(false)
                setRegisterForm({username: '', password: '', password_check: '', name: '', email: ''})
            } else {
                await Promise.reject(new Error('Password is not same with Confirm Password.'))
            }
        } catch (e) {
            const err = e.message.split('|')
            if (err.length > 1) {
                setAlert({color: 'error', on: 'registerForm', msg: 'Field Required', data: err})
            } else {
                setAlert({color: 'error', on: 'registerForm', msg: 'Error', data: [e.message]})
            }
        }
    }

    const modal = (<Dialog size="md" open={modalVisible}>
        <DialogTitle>
            Sign Up
        </DialogTitle>
        <DialogContent>
            <div className="space-y-5">
                {alert.on === 'registerForm' ?
                    <Alert color={alert.color}>
                        <h1>{alert.msg}</h1>
                        <ul>{alert.data.map(item => <li key={item}>{item}</li>)}</ul>
                    </Alert> : null} <Input
                value={registerForm.username}
                onChange={(e) => {
                    setRegisterForm({...registerForm, username: e.target.value})
                }}
                type="text"
                className="outline-none w-full"
                placeholder="Username"
            />
                <Input
                    value={registerForm.password}
                    onChange={(e) => {
                        setRegisterForm({...registerForm, password: e.target.value})
                    }}
                    type="password"
                    className="outline-none w-full"
                    placeholder="password"
                />
                <Input
                    value={registerForm.password_check}
                    onChange={(e) => setRegisterForm({...registerForm, password_check: e.target.value})}
                    type="password"
                    className="outline-none w-full"
                    placeholder="Check Password"
                />
                <Input
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                    type="text"
                    className="outline-none w-full"
                    placeholder="Name"
                />
                <Input
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                    type="text"
                    className="outline-none w-full"
                    placeholder="Email"
                />
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                color="primary"
                onClick={() => {
                    setModalVisible(false)
                    setRegisterForm({username: '', password: '', password_check: '', name: '', email: ''})
                }}
            >
                Cancel
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={onRegister}
            >
                Sing Up
            </Button>
        </DialogActions>
    </Dialog>)

    return <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {modal}
        <div
            className="w-1/2 rounded-lg flex flex-col items-center justify-center border-solid border border-gray-300 bg-white py-10">
            <h2 className="text-3xl align-middle"><Icon color="primary" size="5xl"
                                                        style={{fontSize: '2em'}}>description</Icon>Login</h2>
            <div className="w-3/4 p-10 space-y-5 flex flex-col">
                {alert.on === 'loginForm' ?
                    <Alert color={alert.color}>
                        <h1 className="font-bold">{alert.msg}</h1>
                        <ul>{alert.data.map(item => <li key={item}>{item}</li>)}</ul>
                    </Alert> : null}
                <Input placeholder="Username" size="lg" onChange={(e) => {
                    setLoginForm({...loginForm, username: e.target.value})
                }}/>
                <Input type="password" placeholder="password" size="lg" onChange={(e) => {
                    setLoginForm({...loginForm, password: e.target.value})
                }}/>
                <Button variant="contained" onClick={() => onLogin()}>Login</Button>
                <Button color="info"
                        onClick={() => setModalVisible(true)}>Sign Up</Button>
                <Alert color="warning">
                    <h1 className="font-bold">Heroku需要暖機</h1>
                    <ul>若半小時沒連線，點選login後，需等待Heroku一分鐘後開機再試。</ul>
                </Alert>
            </div>
        </div>
    </div>

}

export default Login;