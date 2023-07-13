import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./card.scss";

export default function Card() {
  return (
    <div className="card">
      <ArrowBackIosIcon className="arrow" />
      <div className="cardContainer">
        <div className="cardContainerTop">
          <img src="https://picsum.photos/id/237/200/300" className="cardContainerTopPic" alt="" />
        </div>
        <div className="cardContainerBottom">
          <h3 className="cardContainerBottomHeader">Black Dog</h3>
          <p>It is a friendly animal </p>
        </div>
      </div>
      <ArrowForwardIosIcon className="arrow" />
    </div>
  )
}
