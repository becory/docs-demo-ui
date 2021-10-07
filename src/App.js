import 'tailwindcss/tailwind.css'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
import Starter from "./views/Starter";
import Index from "./views/Doc";
import Login from "./views/Login";
import Page401 from "./views/Error/Page401";
import Page404 from "./views/Error/Page404";

export default function App() {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Router>
                <Switch>
                    <Router path="/401" exact>
                        <Page401 />
                    </Router>
                    <Router path="/404" exact>
                        <Page404 />
                    </Router>
                    <Route path="/" exact>
                        <Starter/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/create" exact>
                        <Redirect to={`/doc/${uuidV4()}`}/>
                    </Route>
                    <Route path="/doc/:id">
                        <Index/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
