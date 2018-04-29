import React from 'react';
import UserListItem from 'components/UserListItem';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const UserList = ({users}) => (
  <List divided verticalAlign='middle'>
    {users.map(userItem => <UserListItem userItem={userItem} key={userItem.id} />)}
  </List>
)

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;
