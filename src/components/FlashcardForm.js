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
  let {flashCards, handleSubmit, cardTotal} = this.props;
  let newId = ++cardTotal ;
  let card = { question: this.refs.question.value, answer: this.refs.answer.value}
  let {defaults}=this.props;
    if(!defaults){
      card.cardId = newId;
    }
  handleSubmit(card);
  this.refs.flashCardForm.reset();
}

  render() {
    let { defaults } = this.props;
    return (
      <form ref='flashCardForm' onSubmit={this.submit}>
        <input type="text" ref="question" id="question" placeholder="Enter your flashcard question here" />
        <br />
        <input type="text" ref="answer" id="answer" placeholder="Enter your flashcard answer here" />
        <br />
        <button>{ defaults ? 'Update' : 'Add' }</button>
      </form>
    )
  }
}


export default FlashcardForm;
