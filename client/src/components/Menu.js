import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class AppMenu extends Component {
  render() {
    const OrgsButton =
           <Menu.Item
            name='Organizations'
            content='Organizations'
            onClick={() => { this.props.history.push('/organizations') }}
          />

   const PeopleButton =
           <Menu.Item
            name='users'
            content='Users'
            onClick={() => {this.props.history.push('/users') }}
          />


    return (
      <Menu>
        {PeopleButton}
        {OrgsButton}
      </Menu>
    );
  }
}


export default withRouter(AppMenu);
