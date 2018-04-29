import React from 'react'
import PropTypes from 'prop-types';
import { List, Segment, Checkbox } from 'semantic-ui-react'

const UserDataCard = ({user}) => (
  <Segment >
    <List divided relaxed>
      <List.Item>
        <List.Content>
          <List.Header>First Name</List.Header>
          {user.first_name}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Last Name</List.Header>
          {user.last_name}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Email</List.Header>
          {user.email}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Height</List.Header>
          {user.height}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Weight</List.Header>
          {user.weight}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Public profile</List.Header>
           <Checkbox toggle checked={user.is_public} disabled />
        </List.Content>
      </List.Item>
    </List>
  </Segment>
)

UserDataCard.propTypes = {
  user: PropTypes.array.isRequired
}

export default UserDataCard;
