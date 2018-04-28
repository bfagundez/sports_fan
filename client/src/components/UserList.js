import React from 'react';
import UserListItem from 'components/UserListItem';
import PropTypes from 'prop-types';

const UserList = ({orgs}) => ( 
  <ul>
    {orgs.map(orgItem => <UserListItem orgItem={orgItem} key={orgItem.id} />)}
  </ul>
)

UserList.propTypes = {
  orgs: PropTypes.array.isRequired
}

export default UserList;
