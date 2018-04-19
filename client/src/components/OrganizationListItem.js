import React from 'react';
import PropTypes from 'prop-types';

const OrganizationListItem = ({orgItem}) => (
  <li> {orgItem.name} </li>
)

OrganizationListItem.propTypes = {
  orgItem: PropTypes.object.isRequired
}

export default OrganizationListItem;
