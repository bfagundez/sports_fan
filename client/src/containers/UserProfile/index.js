import React, { Component } from "react";
import EditButton from 'components/EditButton'
import UserHeader from 'components/UserHeader'
import UserDataCard from 'components/UserDataCard'
import UserDataCardEdit from 'components/UserDataCardEdit'
import ParticipationFeed from 'components/ParticipationFeed'
import InterestList from 'components/InterestList'
import TeamList from 'components/TeamList'
import { Header, Grid, Segment, Divider, Dimmer, Loader} from 'semantic-ui-react'

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {
          id: this.props.match.params.id
      },
      editUserData: false,
      participations: null,
      loading: false
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


  saveUserData(raw){
    this.setState({ loading: true })
    const allowed = ['first_name', 'last_name', 'email', 'height', 'weight', 'is_public']
    const filtered = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
    const payload = { user: filtered}
    const saveUserData = async () => {
      const response = await fetch(`/api/users/${raw.id}?my_profile=true`,{
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const json = await response.json();
      this.setState({profile: json, loading:false, editUserData: false})
    }
    saveUserData()

  }

  renderUserDataCard(user){
    if(this.state.editUserData){
      return(<UserDataCardEdit user={user}
                  onSave={(data) => {this.saveUserData(data)}}
                  onCancel={() => {this.setState({editUserData:false})}} />)

    } else {
      return(<UserDataCard user={user} />)
    }
  }

  renderLoader(){
    if(!this.state.loading){ return null }
    return(<Dimmer active>
        <Loader indeterminate>Please wait..</Loader>
      </Dimmer>)
  }

  render() {
    const user = this.state.profile
    return(
      <div>
        {this.renderLoader()}
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
