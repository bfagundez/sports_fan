import React, { Component } from 'react';
import OrganizationList from 'components/OrganizationList'
import { Header } from 'semantic-ui-react';

class Organizations extends Component {
  constructor(props){
    super(props);
    this.state = { organizations :[]};
  }

  componentDidMount(){

    const requestOrgs = async () => {
      const response = await fetch(`/api/organizations`)
      const json = await response.json();
      this.setState({organizations: json })
      console.log(json);
    }

    requestOrgs()
  }
  render() {
    return (
      <div>
        <Header size='medium'>Organizations</Header>
        <OrganizationList orgs={this.state.organizations} />
      </div>
    );
  }
}


export default Organizations;
