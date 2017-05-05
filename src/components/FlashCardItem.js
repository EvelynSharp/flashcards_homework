import React from 'react';

const styles = {
  link: {
    cursor: 'pointer'
  }
}
//think about how to add new id to new cards vs exisiting user id
const FlashCardItem = ({ question, answer, id, show }) => (
  <div onClick={() => show(id)} style={styles.link}>{question}</div>
)

export default FlashCardItem;
