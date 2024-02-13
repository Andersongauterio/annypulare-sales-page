import React from 'react';
import './styles.css';
import cardImg from '../../assets/images/card.png';

const Card = () => {
  return (
    <div className='annypulare-card-container'>
      <div className='annypulare-card-img'>
        <img src={cardImg} alt="logo" />
      </div>
    </div>
  );
};

export default Card;