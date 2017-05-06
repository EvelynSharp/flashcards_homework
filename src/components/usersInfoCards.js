import React from 'react';
import UserInfoItem from './UserInfoItem';

const UsersInfoCards = ({ usersInfo, show }) => (
  <div>
    { usersInfo.map( uInfo => <UserInfoItem key={uInfo.id} {...uInfo} ifUser={true} show={show} /> ) }
  </div>
)

export default UsersInfoCards;
