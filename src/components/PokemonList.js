import React from 'react';
import PokemonDetail from './PokemonDetail.js';

const PokemonList = (props)=>{
  // console.log("NEWONE: ",props);
  var rndA = Math.floor((Math.random()*151)+1);
  var rndB = Math.floor((Math.random()*151)+1);

  const pokemonA = props.pokemonarray[rndA];
  const pokemonB = props.pokemonarray[rndB];

  if(pokemonA && pokemonB){
    if (!props.pokemonAstats && !props.pokemonBstats){
      props.getPokemonStats(pokemonA.url);
      props.getPokemonStats(pokemonB.url);
      return null;
    } else {
      // console.log("Pokemon A stats: ",props.pokemonAstats.sprites.front_default);
      return (
        <div className="monster-list">
          <PokemonDetail
            key={rndA}
            name={props.pokemonAstats.name}
            image={props.pokemonAstats.sprites.front_default}
            hp={props.pokemonAstats.stats["5"].base_stat}
            type={props.pokemonAstats.types["0"].type.name}
            weight={props.pokemonAstats.weight}
            speed={props.pokemonAstats.stats["0"].base_stat}
            defence={props.pokemonAstats.stats["3"].base_stat}
            attack={props.pokemonAstats.stats["4"].base_stat}
          />

          <PokemonDetail
            key={rndB}
            name={props.pokemonBstats.name}
            image={props.pokemonBstats.sprites.front_default}
            hp={props.pokemonBstats.stats["5"].base_stat}
            type={props.pokemonBstats.types["0"].type.name}
            weight={props.pokemonBstats.weight}
            speed={props.pokemonBstats.stats["0"].base_stat}
            defence={props.pokemonBstats.stats["3"].base_stat}
            attack={props.pokemonBstats.stats["4"].base_stat}
          />
        </div>
      )
    }
    // console.log("Pokemon: ",pokemonA);
  } else {
    return null;
  }
}

export default PokemonList;
