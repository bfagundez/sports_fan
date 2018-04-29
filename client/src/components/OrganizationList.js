import React from 'react';
import OrganizationListItem from 'components/OrganizationListItem';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const OrganizationList = ({orgs}) => (
  <List divided verticalAlign='middle'>
    {orgs.map(orgItem => <OrganizationListItem orgItem={orgItem} key={orgItem.id} />)}
  </List>
)

OrganizationList.propTypes = {
  orgs: PropTypes.array.isRequired
}

export default OrganizationList;
