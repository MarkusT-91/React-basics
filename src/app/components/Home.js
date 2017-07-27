import React from "react";
import PropTypes from 'prop-types'; // PropTypes toimi ennen perus-React paketin kanssa, mutta nykyään pitää importata erikseen PropTypes

export class Home extends React.Component {

    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        var text = "Jotain tekstiä!";
        return (
            <div>
                <p>Uusi komponentti!</p>       
                <p>Nimesi on {this.props.name}, ikäsi on {this.age}</p>
                <hr/> 
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Lisää ikää!</button>                
            </div>
        );
    }
}

Home.propTypes = { // määrittää mitä tyyppiä minkäkin arvon tulee olla. Jollei esim nimi ole string = error
    name: PropTypes.string,
    age: PropTypes.number
};