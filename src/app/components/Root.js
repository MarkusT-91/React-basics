import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children} 
                        {/* rendreröi sen mikä on index.js:ssä lapsikomponenttina. Tässä tapauksessa se on Home. Katso index.js */}
                    </div>
                </div>
            </div>
        );
    }
}