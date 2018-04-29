import React from 'react';
import InterestListItem from 'components/InterestListItem';
import PropTypes from 'prop-types';
import { List, Segment } from 'semantic-ui-react';

const InterestList = ({interests}) => (
  <Segment>
    <List divided verticalAlign='middle' relaxed="very">
      {interests.map(interest => <InterestListItem interest={interest} key={interest.id} />)}
    </List>
  </Segment>
)

InterestList.propTypes = {
  interests: PropTypes.array.isRequired
}

export default InterestList;
