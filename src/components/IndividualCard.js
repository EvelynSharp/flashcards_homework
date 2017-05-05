import React from 'react';
import BASE_URL from '../url';
//import ProductForm from './ProductForm';

class IndividualCard extends React.Component {
//  state = { flashcard: {} }

  // componentDidMount() {
  //   fetch(`${BASE_URL}/${this.props.id}`)
  //     .then( res => res.json() )
  //     .then( product => this.setState({ product }) )
  // }

  render() {
    let { toggleCard, side, sersInfo,flashCards,showAll, removeCard, updateCard, id } = this.props;
    let { flashcard: { question, answer, cardId }} = flashCards.filter(c => c.id == id);

    return (
      <div onClick ={()=>{toggleCard(side)}}>
        {side =='front' ?
          <h1>{question}</h1>
          :
          <h1>{answer}</h1>
        }
        <div>
          <button onClick={showAll}>Show All</button>
          <button onClick={removeCard}>Delete</button>
        </div>

        {/*
        <ProductForm handleSubmit={updateProduct} defaults={{ name, description, base_price }} />
        */}
      </div>
    )
  }
}

export default IndividualCard;
