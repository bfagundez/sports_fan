import React, { Component } from "react";
import TeamList from 'components/TeamList'
import { Header } from 'semantic-ui-react';

class OrganizationDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      orgData: {
          id: this.props.match.params.id
      },
      orgTeams: []
    }

  }

  componentDidMount(){
    const orgId = this.state.orgData.id

    const requestOrgTeams = async () => {
      const response = await fetch(`/api/organizations/${orgId}/teams`)
      const json = await response.json();
      this.setState({orgTeams: json })
    }

    const requestOrgData = async () => {
      const response = await fetch(`/api/organizations/${orgId}`)
      const json = await response.json();
      this.setState({orgData: json })
    }

    requestOrgTeams()
    requestOrgData()

  }

  render() {
    return(
      <div>
        <Header size='medium'>{this.state.orgData.name}
          <Header.Subheader>
            List of Teams
          </Header.Subheader>
        </Header>
        <TeamList teams={this.state.orgTeams} />
      </div>)
  }
}

export default OrganizationDetail;
