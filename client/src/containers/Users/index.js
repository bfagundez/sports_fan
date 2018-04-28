import React, { Component } from 'react';
import UserList from 'components/UserList'

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
        <p> User list: </p>
        <UserList users={this.state.users} />
      </div>
    );
  }
}


export default Users;
