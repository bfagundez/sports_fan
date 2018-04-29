import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';

const UserHeader = ({user}) => (
        <Header as='h2'>
          <Icon name='user' />
          <Header.Content>
            {user.first_name} {user.last_name}
            {!user.first_name && 'Anonymous User'}
          </Header.Content>
        </Header>
)

UserHeader.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserHeader;
