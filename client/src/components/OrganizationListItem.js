import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const OrganizationListItem = ({orgItem}) => (
  <li> <Link to={"/organizations/"+orgItem.id} >{orgItem.name}</Link> </li>
)

OrganizationListItem.propTypes = {
  orgItem: PropTypes.object.isRequired
}

export default OrganizationListItem;
