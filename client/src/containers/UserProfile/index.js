import React, { Component } from "react";
import EditButton from 'components/EditButton'
import UserHeader from 'components/UserHeader'
import UserDataCard from 'components/UserDataCard'
import ParticipationFeed from 'components/ParticipationFeed'
import InterestList from 'components/InterestList'
import TeamList from 'components/TeamList'
import { Header, Icon, Grid, Segment, Divider } from 'semantic-ui-react'

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {
          id: this.props.match.params.id
      },
      participations: null
    }
  }

  componentDidMount(){
    const userId = this.state.profile.id

    const requestUserData = async () => {
      const response = await fetch(`/api/users/${userId}?my_profile=true`)
      const json = await response.json();
      this.setState({ profile: json })
    }
    requestUserData()
  }

  render() {
    const user = this.state.profile
    return(
      <div>
        <UserHeader user={user} />
        <Divider />
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header as='h4'>
                <EditButton /> User Data
              </Header>
             {user && <UserDataCard user={user} />}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                 <EditButton /> Teams
              </Header>
              {user.teams && <Segment> <TeamList teams={user.teams} /> </Segment>}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                 <EditButton /> Interests
              </Header>
                {user.interests &&  <InterestList interests={user.interests} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Header as='h4'>
          <EditButton /> Participations
        </Header>
        <Segment>
          {user.participations && <ParticipationFeed participations={user.participations} />}
        </Segment>
      </div>)
  }
}

export default UserProfile;
