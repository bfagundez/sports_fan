import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const UserListItem = ({userItem}) => (
  <li> <Link to={"/users/"+userItem.id} >{userItem.first_name} {userItem.last_name}</Link> </li>
)

UserListItem.propTypes = {
  userItem: PropTypes.object.isRequired
}

export default UserListItem;
