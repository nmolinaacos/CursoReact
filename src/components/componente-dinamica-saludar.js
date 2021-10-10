import react from "react";

export default class ComponenteDinamicaSaludar extends react.Component {

    render(){
        return(
            <h1>Hola {this.props.nombre}</h1>
        );
    }

}