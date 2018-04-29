import React from 'react';
import TeamListItem from 'components/TeamListItem';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const TeamList = ({teams}) => (
  <List divided verticalAlign='middle'>
    {teams.map(team => <TeamListItem team={team} key={team.id} />)}
  </List>
)

TeamList.propTypes = {
  teams: PropTypes.array.isRequired
}

export default TeamList;
