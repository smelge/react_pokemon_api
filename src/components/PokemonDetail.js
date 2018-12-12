import React from 'react';

const PokemonDetail = (props)=>{
  if(!props)return null;
  console.log("Here: ",props);
  return(
    <div className="pokemon-box">
      <div className="pokemon-name">Name</div>
      <div className="pokemon-detail-container">
        <div className="pokemon-image">
        img / hp
        </div>
        <div className="pokemon-stats">
          Types, weight, speed, defence, attack
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;
