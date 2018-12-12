import React from 'react';
import PokemonDetail from './PokemonDetail.js';

const PokemonList = (props)=>{
  console.log("NEWONE: ",props);
  var rndA = Math.floor((Math.random()*151)+1);
  var rndB = Math.floor((Math.random()*151)+1);

  const pokemonA = props.pokemonarray[rndA];
  const pokemonB = props.pokemonarray[rndB];
  console.log("POOPS: ",props);

  if(pokemonA && pokemonB){
    if (!props.pokemonAstats && !props.pokemonBstats){
      props.getPokemonStats(pokemonA.url);
      props.getPokemonStats(pokemonB.url);
      return null;
    } else {
      console.log("Pokemon A stats: ",props.pokemonAstats);
      console.log("Pokemon B stats: ",props.pokemonBstats);
      return (

        <div className="monster-list">
          <PokemonDetail key={rndA} name={pokemonA.name}/>
          <PokemonDetail key={rndB} name={pokemonB.name}/>
        </div>
      )
    }
    // console.log("Pokemon: ",pokemonA);
  } else {
    return null;
  }
}

export default PokemonList;
