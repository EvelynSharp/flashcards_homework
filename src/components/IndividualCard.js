import React from 'react';
import BASE_URL from '../url';
import FlashcardForm from './FlashcardForm';

class IndividualCard extends React.Component {
 // state = { fCard: {} }

  // componentDidMount() {
  //   fetch(`${BASE_URL}/${this.props.id}`)
  //     .then( res => res.json() )
  //     .then( product => this.setState({ product }) )
  // }

  render() {
    let { toggleCard, side, sersInfo, flashCards, showAll, removeCard, updateCard, id } = this.props;
    let  flashcard = flashCards.filter(c => c.cardId == id);

    // let flas = flashcard.map( f => {
    //   return (
    //   side =='front' ?
    //     <h1>{f.question}</h1>
    //     :
    //     <h1>{f.answer}</h1>
    //   )
    // })
    return (
      <div>
        { side =='front' ?
          <h1 onClick ={()=>{toggleCard(side)}}>{flashcard[0].question}</h1>
          :
          <h1 onClick ={()=>{toggleCard(side)}}>{flashcard[0].answer}</h1>
        }
        <div>
          <FlashcardForm handleSubmit={updateCard} defaults={{ question:flashcard[0].question,answer:flashcard[0].answer,cardId:flashcard[0].cardId }}/>
          <button onClick={showAll}>Show All</button>
          <button onClick={removeCard}>Delete</button>

        </div>


      </div>
    )
  }
}

export default IndividualCard;
