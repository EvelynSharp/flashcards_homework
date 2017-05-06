import React from 'react';

const styles = {
  link: {
    cursor: 'pointer'
  }
}
//think about how to add new id to new cards vs exisiting user id
const UserInfoItem = ({ first_name, last_name, id, show, ifUser }) => (
  <div className="list-items" onClick={() => show(id, ifUser)} style={styles.link}>{first_name}</div>
)

export default UserInfoItem;
