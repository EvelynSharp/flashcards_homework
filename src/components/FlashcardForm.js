import React from 'react';

class FlashcardForm extends React.Component{
cardDefaults = { question: '', answer: '',cardId:0 }
state = { card: this.cardDefaults}

// componentDidUpdate() {
//   let { defaults } = this.props;
//   if (defaults && !this.state.loaded)
//     this.setState({ card: defaults, loaded: true })
// }

submit = (e) => {
  e.preventDefault()
  let {flashCards, ifUser, handleSubmit, cardTotal} = this.props;
  let newId = ++cardTotal ;
  let card;
  if(!ifUser){
    card = { question: this.refs.question.value, answer: this.refs.answer.value}
  } else{
    card = { first_name: this.refs.question.value, last_name: this.refs.answer.value}
  }

  let {defaults}=this.props;
    if(!defaults){
      card.cardId = newId;
    } else {
      card.cardId = defaults.cardId;
    }
  handleSubmit(card);
  this.refs.flashCardForm.reset();
}

  render() {
    let { defaults, ifUser } = this.props;
    let placeholder1;
    let placeholder2;
    if (!ifUser) {
      placeholder1="Enter your flashcard question here";
      placeholder2="Enter your flashcard answer here";
    } else {
      placeholder1="Enter user's first name here";
      placeholder2="Enter user's last name here";

    }
    return (
      <form ref='flashCardForm' onSubmit={this.submit}>
        <input type="text" ref="question" id="question" placeholder={placeholder1} />
        <br />
        <input type="text" ref="answer" id="answer" placeholder={placeholder2} />
        <br />
        <button className="btn blue lighten-3">{ defaults ? 'Update' : 'Add' }</button>
      </form>
    )
  }
}


export default FlashcardForm;
