import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react'
import moment from 'moment'

const ParticipationFeedItem = ({participation}) => (
       <Feed.Event>
        <Feed.Label>
          <i className={participation.sport.icon_class} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            {participation.sport.name} participation
            <Feed.Date>{moment(participation.date).calendar()}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            {Math.round(participation.duration/60)} minutes
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>)

ParticipationFeedItem.propTypes = {
  participation: PropTypes.object.isRequired
}

export default ParticipationFeedItem;
