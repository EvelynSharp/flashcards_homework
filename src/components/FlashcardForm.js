import React from 'react';

class FlashcardForm extends React.Component{
cardDefaults = { question: '', answer: '' }
state = { card: this.cardDefaults }

submit = (e) => {
  e.preventDefault()
  let card = { question: this.refs.question.value, answer: this.refs.answer.value }
  let { handleSubmit } = this.props;
  handleSubmit(card);
  this.refs.flashCardForm.reset();
}

  render() {
    return (
      <form ref='flashCardForm' onSubmit={this.submit}>
        <input type="text" ref="question" id="question" placeholder="Enter your flashcard question here" />
        <br />
        <input type="text" ref="answer" id="answer" placeholder="Enter your flashcard answer here" />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default FlashcardForm;
