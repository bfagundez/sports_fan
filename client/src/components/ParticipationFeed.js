import React from 'react'
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react'
import ParticipationFeedItem from 'components/ParticipationFeedItem'

const ParticipationFeed = ({participations}) => (
    <Feed size='large'>
      {participations.map(p => <ParticipationFeedItem participation={p} key={p.id} />)}
    </Feed>
 )

ParticipationFeed.propTypes = {
  participations: PropTypes.array.isRequired
}

export default ParticipationFeed;
