import React, { Component } from "react";
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
      const response = await fetch(`/api/users/${userId}`)
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
                <Header.Content>
                  User Data
                </Header.Content>
              </Header>
             {user && <UserDataCard user={user} />}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                <Header.Content>
                  Teams
                </Header.Content>
              </Header>
              {user.teams && <Segment> <TeamList teams={user.teams} /> </Segment>}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                <Header.Content>
                  Interests
                </Header.Content>
              </Header>
              <Segment>
                {user.interests &&  <InterestList interests={user.interests} />}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                {user.participations && <ParticipationFeed participations={user.participations} />}
              </Segment>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>)
  }
}

export default UserProfile;
