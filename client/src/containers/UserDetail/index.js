import React, { Component } from "react";
import UserParticipationChart from 'containers/UserParticipationChart'
import moment from 'moment'

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
      <div>This is the user: {user.first_name} {user.last_name} <br/>
      {this.renderUserParticipations()}
      </div>)
  }
}

export default UserDetail;
