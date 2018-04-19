import React, { Component } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

class AppHeader extends Component {
  render() {
    return (
      <Header as="h1">
        <Icon name="dashboard" />Team manager
      </Header>
    );
  }
}


export default AppHeader;
