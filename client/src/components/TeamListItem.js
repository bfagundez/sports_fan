import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const TeamListItem = ({team}) => (
  <List.Item>
    <List.Content floated='right'>
    </List.Content>
     <List.Content verticalAlign='bottom'>
      {team.name}
    </List.Content>
  </List.Item>
)

TeamListItem.propTypes = {
  team: PropTypes.object.isRequired
}

export default TeamListItem;
