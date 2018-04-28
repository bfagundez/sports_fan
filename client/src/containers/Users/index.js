import React, { Component } from 'react';
import UserList from 'components/UserList'

class Users extends Component {
  constructor(props){
    super(props);
    this.state = { organizations :[]};
  }

  componentDidMount(){

    const requestOrgs = async () => {
      const response = await fetch(`/api/users`)
      const json = await response.json();
      this.setState({organizations: json })
      console.log(json);
    }

    requestOrgs()
  }
  render() {
    return (
      <div>
        <p> This is organization list </p>
        <UserList orgs={this.state.organizations} />
      </div>
    );
  }
}


export default Users;
