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
    let { toggleCard, side, usersInfo, flashCards, showAll, removeCard, updateCard, id, ifUser, updateUserInfo } = this.props;
    let flashcard = flashCards.filter(c => c.cardId == id);
    let userinfocard = usersInfo.filter(c=>c.id == id);
    let cardDisplay;
    let cardDisplayForm;
    let removeButton;
    if (!ifUser){
        if(side =='front'){
          cardDisplay = (<h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{flashcard[0].question}</h2>)
        }else{
          cardDisplay = (<h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{flashcard[0].answer}</h2>)
        }
        cardDisplayForm = (<FlashcardForm ifUser={ifUser} handleSubmit={updateCard} defaults={{ question:flashcard[0].question,answer:flashcard[0].answer,cardId:flashcard[0].cardId }}/>)
        removeButton =(<button className="btn pink lighten-3" onClick={removeCard}>Delete</button>)
    } else {
        if(side =='front'){
          cardDisplay = (<h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{userinfocard[0].first_name}</h2>)
        }else{
          cardDisplay = (<h2 className="indivTitle" onClick ={()=>{toggleCard(side)}}>{userinfocard[0].last_name}</h2>)

        }
        cardDisplayForm = (<FlashcardForm ifUser={ifUser} handleSubmit={updateUserInfo} defaults={{ first_name:userinfocard[0].first_name,last_name:userinfocard[0].last_name,cardId:userinfocard[0].id }}/>)
        removeButton =(<button disabled className="btn pink lighten-3" onClick={removeCard}>Delete</button>)

    }
    return (
      <div>
        <div className="row">
          <div className="col l6 offset-l3 ">
            <div className="card blue-grey">
              {cardDisplay}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="btnContainer">
            <button className="btn blue lighten-3" onClick={showAll}>Show All</button>
          </div>
          {cardDisplayForm}
          <div className="btnContainer">
            {removeButton}
          </div>

        </div>


      </div>
    )
  }
}

export default IndividualCard;
