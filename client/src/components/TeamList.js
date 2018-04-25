import React from 'react';
import TeamListItem from 'components/TeamListItem';
import PropTypes from 'prop-types';

const TeamList = ({teams}) => (
  <ul>
    {teams.map(team => <TeamListItem team={team} key={team.id} />)}
  </ul>
)

TeamList.propTypes = {
  teams: PropTypes.array.isRequired
}

export default TeamList;
