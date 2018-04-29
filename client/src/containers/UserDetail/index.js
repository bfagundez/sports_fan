import React, { Component } from "react";
import UserHeader from 'components/UserHeader'
import UserDataCard from 'components/UserDataCard'
import ParticipationFeed from 'components/ParticipationFeed'
import InterestList from 'components/InterestList'
import UserParticipationChart from 'containers/UserParticipationChart'
import moment from 'moment'
import { Header, Icon, Grid, Segment, Divider } from 'semantic-ui-react'

class UserDetail extends Component {
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

    // create a window of time to ask for aggregates
    const today = moment().format("YYYY-MM-DD HH:mm:ss")
    const last_week = moment().subtract(49, 'days').format("YYYY-MM-DD HH:mm:ss")
    let participationsParams = `?start_date=${last_week}&end_date=${today}`
    participationsParams += '&aggregate=sports'

    const requestUserParticipations = async () => {
      const response = await fetch(`/api/users/${userId}/participations${participationsParams}`)
      const json = await response.json();
      this.setState({ participations: json })
    }

    requestUserData()
    requestUserParticipations()

  }

  renderUserParticipations(){
    if(!this.state.participations){ return null }
    return(<UserParticipationChart participations={this.state.participations} />)
  }

  render() {
    const user = this.state.profile

    return(
      <div>
       <UserHeader user={user} />
       <Header>Last week participation summary</Header>
        <Segment>
          {this.renderUserParticipations()}
        </Segment>

        <Divider />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header>Participation Feed</Header>
              <Segment>
                {user.participations && <ParticipationFeed participations={user.participations} />}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header>User Information</Header>
              {!user.is_public && <span>The user has a private profile</span>}
              {user.is_public && <UserDataCard user={user} />}
              <Divider />
              <Header>Interests</Header>
              {user.interests &&  <InterestList interests={user.interests} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>)
  }
}

export default UserDetail;
