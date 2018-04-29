import React, { Component } from "react";
import EditButton from 'components/EditButton'
import UserHeader from 'components/UserHeader'
import UserDataCard from 'components/UserDataCard'
import UserDataCardEdit from 'components/UserDataCardEdit'
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
      editUserData: false,
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

  renderUserDataCard(user){
    if(this.state.editUserData){
      return(<UserDataCardEdit user={user} />)
    } else {
      return(<UserDataCard user={user} />)
    }
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
                {!this.state.editUserData && <EditButton onClick={() => this.setState({editUserData:true})} />} User Data
              </Header>
             {user && this.renderUserDataCard(user)}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                Teams
              </Header>
              {user.teams && <Segment> <TeamList teams={user.teams} /> </Segment>}
            </Grid.Column>
            <Grid.Column>
              <Header as='h4'>
                Interests
              </Header>
                {user.interests &&  <InterestList interests={user.interests} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Header as='h4'>
          Participations
        </Header>
        <Segment>
          {user.participations && <ParticipationFeed participations={user.participations} />}
        </Segment>
      </div>)
  }
}

export default UserProfile;
