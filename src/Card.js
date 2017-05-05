import React from 'react';
import FlashcardForm from './FlashcardForm';

class Card extends React.Component {
  state = { card: {} }

  render() {
    let { showAll/*, removeProduct, updateProduct */} = this.props;
    let { card: { question, answer }} = this.state;

    return (
      <div>
        <button onClick={showAll}>Show All</button>
        <h1>{question}</h1>
        <h3>{answer}</h3>
        {/*<button onClick={removeProduct}>Delete</button>*/}
        {/*<ProductForm handleSubmit={updateProduct} defaults={{ name, description, base_price }} />*/}
      </div>
    )
  }
}

export default Card;
