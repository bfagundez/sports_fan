import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button, List } from 'semantic-ui-react'

const UserListItem = ({userItem}) => (
  <List.Item>
    <List.Content floated='right'>
      <Button.Group size='mini'>
        <Button><Link to={"/my_profile/"+userItem.id} >Private Profile</Link></Button>
        <Button.Or />
        <Button><Link to={"/users/"+userItem.id} >Public Profile</Link> </Button>
      </Button.Group>
    </List.Content>
    <List.Content>
      {userItem.first_name} {userItem.last_name}
    </List.Content>
  </List.Item>)

UserListItem.propTypes = {
  userItem: PropTypes.object.isRequired
}

export default UserListItem;
