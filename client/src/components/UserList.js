import React from 'react';
import UserListItem from 'components/UserListItem';
import PropTypes from 'prop-types';

const UserList = ({users}) => ( 
  <ul>
    {users.map(userItem => <UserListItem userItem={userItem} key={userItem.id} />)}
  </ul>
)

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;
