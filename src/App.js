import 'tailwindcss/tailwind.css'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Starter from "./views/Starter";
import Index from "./views/Doc";
import Login from "./views/Login";
import Page401 from "./views/Error/Page401";
import Page404 from "./views/Error/Page404";
import {useSession} from "react-use-session";
import jwt_decode from "jwt-decode";


const PrivateRoute = ({session, ...props}) => {
    let login = false
    try {
        if (session) {
            jwt_decode(session)
            login = true
        }
    } catch (e) {
        login = false
    }
    return login
        ? <Route {...props} />
        : <Redirect to="/login"/>
}

const LoginRoute = ({session, ...props}) => {
    let login = false
    try {
        if (session) {
            jwt_decode(session)
            login = true
        }
    } catch (e) {
        login = false
    }
    return login
        ? <Redirect to="/"/>
        : <Route {...props} />
}

export default function App() {
    const {session} = useSession("docs-demo-token")

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Router>
                <Switch>
                    <LoginRoute session={session} path="/login" component={Login} exact>
                    </LoginRoute>
                    <PrivateRoute session={session} path="/" component={Starter} exact/>
                    <Router path="/home">
                        <Redirect to="/"/>
                    </Router>
                    <Router path="/401" exact>
                        <Page401/>
                    </Router>
                    <Router path="/404" exact>
                        <Page404/>
                    </Router>
                    <Route path="/doc/:id">
                        <Index/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
