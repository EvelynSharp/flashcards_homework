import React from 'react';
import UserInfoItem from './UserInfoItem';

const usersInfoCards = ({ usersInfo, show }) => (
  <ul>
    { usersInfo.map( uInfo => <UserInfoItem key={uInfo.id} {...uInfo} show={show} /> ) }
  </ul>
)

export default usersInfoCards;
