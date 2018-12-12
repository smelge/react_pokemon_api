import React from 'react';
import PokemonDetail from './PokemonDetail.js';

const PokemonList = (props)=>{
  var rndA = Math.floor((Math.random()*151)+1);
  var rndB = Math.floor((Math.random()*151)+1);

  const pokemonA = props.pokemonarray[rndA];
  const pokemonB = props.pokemonarray[rndB];
  //
  // const monsters = props.pokemonarray.map((monster,index)=>{
  //   return (
  //     <PokemonDetail
  //       key={index}
  //       name={monster.name}
  //     />
  //   )
  // })
  if(pokemonA && pokemonB){
    // console.log("Pokemon: ",pokemonA);
    return (
      <div className="monster-list">
        <PokemonDetail key={rndA} name={pokemonA.name}/>
        <PokemonDetail key={rndB} name={pokemonB.name}/>
      </div>
    )
  } else {
    return null;
  }
}

export default PokemonList;
