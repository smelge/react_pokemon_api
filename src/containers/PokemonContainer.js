import React from 'react';
import PokemonList from '../components/PokemonList.js';

class PokemonContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemon:[]
    }
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load",()=>{
      if(request.status !==200)return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const pokemonBlob = data.results;

      let originalPokemon = pokemonBlob.splice(0,151);

      console.log("Pokemon: ",data);
      this.setState({pokemon:originalPokemon})
    });
    request.send();

  }

  render(){
    // console.log("original: ",this.state.pokemon);

    return(
      <PokemonList pokemonarray={this.state.pokemon}/>
    )
  }
}

export default PokemonContainer;
