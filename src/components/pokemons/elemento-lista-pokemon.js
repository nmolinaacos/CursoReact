import react from "react";
import DetallePokemon from "./detalle-pokemon";

export default class Elementopokemon extends react.Component {
    
    constructor(){
        super();
        this.state = {
            switchSelected: false
        };        
    }

    submit (event){
        event.preventDefault();
        console.log(this.state)
        this.setState({
            ...this.state, 
            switchSelected: !this.state.switchSelected
        });
    };

    render(){
        return(
            <div>
                <h1>{this.props.nombrepokemon} </h1>
                <form onSubmit={this.submit.bind(this)}>
                    <button type="submit">Submmit</button>
                </form>
                {
                    this.state.switchSelected && <DetallePokemon nombrepokemon={this.props.nombrepokemon}/>
                }
            </div>

            )
            ;
        }
}