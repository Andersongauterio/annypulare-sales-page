import React from 'react';
import './styles.css';
import cardImg from '../../assets/images/card.png';

const Card = () => {
  return (
    <div className='annypulare-card-container'>
      <div className='annypulare-card-img'>
        <img src={cardImg} alt="curso de velas aromáticas" />
      </div>
    </div>
  );
};

export default Card;