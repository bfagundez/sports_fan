import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button, List } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

const OrganizationListItem = ({orgItem, history}) => (
  <List.Item>
    <List.Content floated='right'>
      <Button size='mini' onClick={() => {history.push("/organizations/"+orgItem.id)}}>View</Button>
    </List.Content>
    <List.Content verticalAlign='bottom'>
      {orgItem.name}
    </List.Content>
  </List.Item>
)

OrganizationListItem.propTypes = {
  orgItem: PropTypes.object.isRequired
}

export default withRouter(OrganizationListItem);
