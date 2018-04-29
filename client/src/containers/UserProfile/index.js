import React, { Component } from "react";

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
    requestUserData()

  }

  render() {
    const user = this.state.profile

    return(
      <div>Hello! {user.first_name} {user.last_name} <br/>
      </div>)
  }
}

export default UserDetail;
