import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const AppMenu = ({history}) => (
      <Menu>
          <Menu.Item
            name='users'
            content='Users'
            onClick={() => {history.push('/users') }}
          />
          <Menu.Item
            name='Organizations'
            content='Organizations'
            onClick={() => {history.push('/organizations') }}
          />
      </Menu>)

export default withRouter(AppMenu);
