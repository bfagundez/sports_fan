import React from 'react';
import OrganizationListItem from 'components/OrganizationListItem';
import PropTypes from 'prop-types';

const OrganizationList = ({orgs}) => ( 
  <ul>
    {orgs.map(orgItem => <OrganizationListItem orgItem={orgItem} key={orgItem.id} />)}
  </ul>
)

OrganizationList.propTypes = {
  orgs: PropTypes.array.isRequired
}

export default OrganizationList;
