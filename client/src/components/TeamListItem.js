import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TeamListItem = ({team}) => (
  <li> {team.name} </li>
)

TeamListItem.propTypes = {
  team: PropTypes.object.isRequired
}

export default TeamListItem;
