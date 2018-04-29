import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button, List } from 'semantic-ui-react'

const OrganizationListItem = ({orgItem}) => (
  <List.Item>
    <List.Content floated='right'>
      <Button size='mini'><Link to={"/organizations/"+orgItem.id} >View</Link></Button>
    </List.Content>
    <List.Content verticalAlign='bottom'>
      {orgItem.name}
    </List.Content>
  </List.Item>
)

OrganizationListItem.propTypes = {
  orgItem: PropTypes.object.isRequired
}

export default OrganizationListItem;
