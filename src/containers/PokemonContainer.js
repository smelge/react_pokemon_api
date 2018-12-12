import React from 'react';
import PokemonList from '../components/PokemonList.js';

class PokemonContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemon:[],
      pokemonA:[],
      pokemonB:[]
    }

    this.getPokemonByUrl = this.getPokemonByUrl.bind(this);
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load",()=>{
      if(request.status !==200)return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const pokemonBlob = data.results;

      let originalPokemon = pokemonBlob.splice(0,151);

      // console.log("Pokemon: ",data);
      this.setState({pokemon:originalPokemon})
    });
    request.send();

  }

  getPokemonByUrl(url){
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load",()=>{
      if(request.status !==200)return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);

      // console.log("DATA: ",pokemonData);
      if(this.state.pokemonA.length == 0){
        this.setState({pokemonA:data})
      } else if(this.state.pokemonB == 0){
        this.setState({pokemonB:data})
      };


    });
    request.send();
  }

  render(){
    if (this.state.pokemonA.length !==0 && this.state.pokemonB.length !==0){
      return(
        <PokemonList
          pokemonarray={this.state.pokemon}
          getPokemonStats={this.getPokemonByUrl}
          pokemonAstats={this.state.pokemonA}
          pokemonBstats={this.state.pokemonB}

        />
      )
    } else {
      return(
        <PokemonList
          pokemonarray={this.state.pokemon}
          getPokemonStats={this.getPokemonByUrl}
        />
      )
    }


  }
}

export default PokemonContainer;
