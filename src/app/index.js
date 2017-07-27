import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    render() {
        var user = {
            name: "Pekka",
            hobbies: ["Urheilu", "Elokuvat"]
        };
        return ( // return voi palauttaa vain yhden parent-elementin
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Markus"} age={26} user={user}>
                            <p>Tässä on tekstiä</p>
                        </Home>
                    </div>
                </div>
            </div>                
        );
    }
}

render(<App/>, window.document.getElementById("app"));