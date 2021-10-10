import React from "react";
import axios from "axios";

export default class DetallePokemon extends React.Component{
     constructor(){
        super();
        this.state = {
            date: {}
        }
     }

     componentDidMount(){
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${this.props.nombrepokemon}`;
        axios.get(endpoint)        
            .then(response => {
                this.setState(
                    {
                        ...this.state,
                        data: response.data
                    }
                );
            })
     }

    render(){
        return(
            <div className="DetalleDiv">
              {  
                  this.state.data && this.state.data.sprites && this.state.data.sprites.back_default && <img src={this.state.data.sprites.back_default} alt={this.state.data.sprites.back_default} />
              }
              {  
                this.state.data && this.state.data.sprites && this.state.data.sprites.back_female && <img src={this.state.data.sprites.back_female} alt={this.state.data.sprites.back_female}/>
              }
              {  
                  this.state.data && this.state.data.sprites && this.state.data.sprites.back_shiny && <img src={this.state.data.sprites.back_shiny} alt={this.state.data.sprites.back_shiny} />
              }
              {  
                this.state.data && this.state.data.sprites && this.state.data.sprites.back_shiny_female && <img src={this.state.data.sprites.back_shiny_female} alt={this.state.data.sprites.back_shiny_female}/>
              }
              {  
                  this.state.data && this.state.data.sprites && this.state.data.sprites.front_default && <img src={this.state.data.sprites.front_default} alt={this.state.data.sprites.front_default} />
              }
              {  
                this.state.data && this.state.data.sprites && this.state.data.sprites.front_female && <img src={this.state.data.sprites.front_female} alt={this.state.data.sprites.front_female}/>
              }
              {  
                  this.state.data && this.state.data.sprites && this.state.data.sprites.front_shiny && <img src={this.state.data.sprites.front_shiny} alt={this.state.data.sprites.front_shiny} />
              }
              {  
                this.state.data && this.state.data.sprites && this.state.data.sprites.front_shiny_female && <img src={this.state.data.sprites.front_shiny_female} alt={this.state.data.sprites.front_shiny_female}/>
              }
            </div>
        )
    }
}