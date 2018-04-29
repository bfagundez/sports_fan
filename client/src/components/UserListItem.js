import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button, List } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

const UserListItem = ({userItem, history}) => (
  <List.Item>
    <List.Content floated='right'>
      <Button.Group size='mini'>
        <Button onClick={() => {history.push("/my_profile/"+userItem.id)}}>
          Private Profile
        </Button>
        <Button.Or />
        <Button onClick={() => {history.push("/users/"+userItem.id)}}>
          Public Profile
        </Button>
      </Button.Group>
    </List.Content>
    <List.Content>
      {userItem.first_name} {userItem.last_name}
    </List.Content>
  </List.Item>)

UserListItem.propTypes = {
  userItem: PropTypes.object.isRequired
}

export default withRouter(UserListItem);
