import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./card.scss";

export default function Card({ pokemons }) {
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);
  const count = pokemons.length;

  const handleIncrease = () => {
    if (selectedPokemonIndex >= count - 1) {
      setSelectedPokemonIndex(0)
    } else {
      setSelectedPokemonIndex(prev => prev + 1)
    }
  }

  const handleDecrease = () => {
    if (selectedPokemonIndex <= 0) {
      setSelectedPokemonIndex(count - 1)
    } else {
      setSelectedPokemonIndex(prev => prev - 1);
    }
  }
  // console.log("index", selectedPokemonIndex)

  const activePokemon = pokemons[selectedPokemonIndex];

  if (!activePokemon) {
    return null;
  }

  return (
    <div className="card">
      <ArrowBackIosIcon className="arrow" onClick={handleDecrease} />
      <div className="cardContainer">
        <div className="cardContainerTop">
          <img src={activePokemon.sprites?.front_shiny} className="cardContainerTopPic" alt="" />
        </div>
        <div className="cardContainerBottom">
          <h3 className="cardContainerBottomHeader">{activePokemon.name}</h3>
          <p>It is a friendly animal </p>
        </div>
      </div>
      <ArrowForwardIosIcon className="arrow" onClick={handleIncrease} />
    </div>
  )
}
