import React, { Component } from 'react';
import UserList from 'components/UserList'
import { Header } from 'semantic-ui-react';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = { users :[]};
  }

  componentDidMount(){

    const requestOrgs = async () => {
      const response = await fetch(`/api/users`)
      const json = await response.json();
      this.setState({users: json })
    }

    requestOrgs()
  }
  render() {
    return (
      <div>
        <Header size='medium'>Users</Header>
        <UserList users={this.state.users} />
      </div>
    );
  }
}


export default Users;
