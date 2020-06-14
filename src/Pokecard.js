import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//if the number is less than 3 digits this function adds 0s in front to make it 3 digits
let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 class="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
        <img src={imgSrc} alt={this.props.name} />
        </div>
          <div className="Pokecard-data">Type: {this.props.type}</div>
          <div className="Pokecard-data">Exp: {this.props.exp}</div>
        
      </div>
    );
  }
}

export default Pokecard;
