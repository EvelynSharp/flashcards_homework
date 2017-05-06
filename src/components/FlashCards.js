import React from 'react';
import FlashCardItem from './FlashCardItem';

const FlashCards = ({ flashCards, show }) => (
  <div className="list-container">
    { flashCards.map( fCard => <FlashCardItem key={fCard.cardId} {...fCard} ifUser={false} show={show} /> ) }
  </div>
)

export default FlashCards;
