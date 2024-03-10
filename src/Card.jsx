import React from 'react';

const Card = ({ beer }) => (
  <div className='beerCard'>
    <img src={beer.image_url} alt={beer.name} className='beerImg' />
    <h3>{beer.name}</h3>
    <p>{beer.tagline}</p>
  </div>
);

export default Card;
