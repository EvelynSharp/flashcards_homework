import React from 'react';

const styles = {
  link: {
    cursor: 'pointer'
  }
}
//think about how to add new id to new cards vs exisiting user id
const UserInfoItem = ({ first_name, last_name, id, show }) => (
  <li onClick={() => show(id)} style={styles.link}>{first_name}</li>
)

export default UserInfoItem;
