import react from "react";
import Elementopokemon from "./elemento-lista-pokemon";
import { Pokemons } from "./mocks-pokemon";

export default class Listapokemon extends react.Component {
    render(){
        return Pokemons.results.map(
                    (pokemon) => 
                        <div classname="ii">
                                <Elementopokemon nombrepokemon={pokemon.name}/>
                        </div>
                    
                );

 
        
    }
}