import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./card.scss";

export default function Card({ pokemon, setSelectedPokemonIndex }) {

  const handleIncrease = () => {
    setSelectedPokemonIndex(prev => prev + 1)
  }

  const handleDecrease = () => {
    setSelectedPokemonIndex(prev => prev - 1)
  }

  return (
    <div className="card">
      <ArrowBackIosIcon className="arrow" onClick={handleIncrease} />
      <div className="cardContainer">
        <div className="cardContainerTop">
          <img src={pokemon?.sprites?.front_shiny} className="cardContainerTopPic" alt="" />
        </div>
        <div className="cardContainerBottom">
          <h3 className="cardContainerBottomHeader">Black Dog</h3>
          <p>It is a friendly animal </p>
        </div>
      </div>
      <ArrowForwardIosIcon className="arrow" onClick={handleDecrease} />
    </div>
  )
}
