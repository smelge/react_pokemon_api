import React from 'react';

const PokemonDetail = (props)=>{
  if(!props)return null;
  // console.log("Here: ",props);
  return(
    <div className="pokemon-box">
      <div className="pokemon-name">{props.name}</div>
      <div className="pokemon-detail-container">
        <div className="pokemon-image">
          <img src={props.image} alt={props.name}/>
          <br/>
          {props.hp}HP
        </div>
        <div className="pokemon-stats">
          Type: {props.type}<br/>
          Weight: {props.weight}<br/>
          Speed: {props.speed}<br/>
          Defence: {props.defence}<br/>
          Attack: {props.attack}<br/>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;
