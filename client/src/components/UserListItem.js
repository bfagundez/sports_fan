import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const UserListItem = ({orgItem}) => (
  <li> <Link to={"/organizations/"+orgItem.id} >{orgItem.name}</Link> </li>
)

UserListItem.propTypes = {
  orgItem: PropTypes.object.isRequired
}

export default UserListItem;
