import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Root} from "./components/Root";
import {User} from "./components/User";

class App extends React.Component {
    render() {
        return (
           <Router>
               <div>
                   <Root>
                       <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path={"/user/:id"} component={User} />
                            <Route path={"/home"} component={Home} />
                       </Switch>
                   </Root>
               </div>              
           </Router>
        ) ;
        
    }
}

render(<App/>, window.document.getElementById("app"));