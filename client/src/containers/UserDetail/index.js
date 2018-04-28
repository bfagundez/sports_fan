
import React, { Component } from "react";

class UserDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: {
          id: this.props.match.params.id
      }
    }

  }

  componentDidMount(){
    const userId = this.state.userData.id

    const requestUserData = async () => {
      const response = await fetch(`/api/users/${userId}`)
      const json = await response.json();
      console.log(json)
      this.setState({ userData: json })
    }

    requestUserData()

  }

  render() {
    const user = this.state.userData

    return(
      <div>This is the user: {user.first_name} {user.last_name} <br/>
      </div>)
  }
}

export default UserDetail;
