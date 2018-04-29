import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const InterestListItem = ({interest}) => (
  <List.Item>
    <List.Content floated='right'>
      <i className={interest.sport.icon_class} />
    </List.Content>
     <List.Content verticalAlign='bottom'>
      {interest.sport.name}
    </List.Content>
  </List.Item>
)

InterestListItem.propTypes = {
  interest: PropTypes.object.isRequired
}

export default InterestListItem;
