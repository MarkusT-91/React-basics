import React from "react";
import PropTypes from 'prop-types'; // PropTypes toimi ennen perus-React paketin kanssa, mutta nykyään pitää importata erikseen PropTypes

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onMakeYounger() {
        this.setState({
            age: this.state.age - 3       
        });
        if(this.state.age <= 0) {
                alert("Lopeta!");
            }
    }

    render() {
        var text = "Jotain tekstiä!";
        return (
            <div>
                <p>Uusi komponentti!</p>       
                <p>Nimesi on {this.props.name}, ikäsi on {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/> 
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Lisää ikää!</button>
                <button onClick={() => this.onMakeYounger()} className="btn btn-danger">Vähennä ikää!</button>                
            </div>
        );
    }
}

Home.propTypes = { // määrittää mitä tyyppiä minkäkin arvon tulee olla. Jollei esim nimi ole string = error
    name: PropTypes.string,
    age: PropTypes.number
};