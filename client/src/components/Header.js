import React, { Component } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

class AppHeader extends Component {
  render() {
    return (
      <div>
        <Divider />
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            Sports Fan
          </Header.Content>
        </Header>
      </div>
    );
  }
}


export default AppHeader;
