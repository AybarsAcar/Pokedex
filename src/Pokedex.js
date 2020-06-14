import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {


  render() {

     //conditional statement for Pokedex hand winner -- to dynamic text and css
     let title;
     if (this.props.isWinner){
       title = <h1 className="Pokedex-winner">Winning Hand!</h1>
     } else{
       title = <h1 className="Pokedex-loser">You Lost..</h1>
     }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total experience: {this.props.exp}</h4>
        
        <div className="Pokedex-cards">
        {this.props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
