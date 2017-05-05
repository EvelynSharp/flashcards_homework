import React from 'react';
import FlashCardItem from './FlashCardItem';

const FlashCards = ({ flashCards, show }) => (
  <div>
    { flashCards.map( fCard => <FlashCardItem key={fCard.cardId} {...fCard} show={show} /> ) }
  </div>
)

export default FlashCards;
