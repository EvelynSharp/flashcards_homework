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
        <div className="row">
          <div className="col l6 offset-l3 ">
            <div className="card blue-grey">
              { side =='front' ?
                    <h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{flashcard[0].question}</h2>
                :

                  <h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{flashcard[0].answer}</h2>

              }
            </div>
          </div>
        </div>
        <div className="center">
          <div className="btnContainer">
            <button className="btn blue lighten-3" onClick={showAll}>Show All</button>
          </div>
          <FlashcardForm handleSubmit={updateCard} defaults={{ question:flashcard[0].question,answer:flashcard[0].answer,cardId:flashcard[0].cardId }}/>
          <div className="btnContainer">
            <button className="btn pink lighten-3" onClick={removeCard}>Delete</button>
          </div>

        </div>


      </div>
    )
  }
}

export default IndividualCard;
