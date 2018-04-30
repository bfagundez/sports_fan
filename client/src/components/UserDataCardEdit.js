import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { List, Button, Segment, Checkbox, Form, Input } from 'semantic-ui-react'

class UserDataCardEdit extends Component {

  constructor(props){
    super(props)
    this.state = this.props.user
  }

  handleChange(e,flag=false){
    if(flag){
      this.setState({ is_public: !this.state.is_public });
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave(e){
    this.props.onSave(this.state)
  }

  render(){
    return (<Segment >
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>First Name</List.Header>
            <Form.Field control={Input}
                        value={this.state.first_name}
                        name='first_name'
                        onChange={(e) => this.handleChange(e)}/>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Last Name</List.Header>
            <Form.Field control={Input} value={this.state.last_name}
                        name='last_name'
                        onChange={(e) => this.handleChange(e)}/>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Email</List.Header>
            <Form.Field control={Input} value={this.state.email}
                        name='email'
                        onChange={(e) => this.handleChange(e)}/>

          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Height</List.Header>
            <Form.Field control={Input} value={this.state.height}
                        name='height'
                        onChange={(e) => this.handleChange(e)}/>

          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Weight</List.Header>
            <Form.Field control={Input} value={this.state.weight}
                        name='weight'
                        onChange={(e) => this.handleChange(e)}/>

          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Public profile</List.Header>
             <Checkbox toggle checked={this.state.is_public}
                        className='is_public'
                        name='is_public'
                        onChange={(e) => this.handleChange(e,true)}/>

          </List.Content>
        </List.Item>
      </List>
      <Button onClick={this.props.onCancel}>Cancel</Button>
      <Button onClick={(e) => this.handleSave(e)}>Save</Button>
    </Segment>
  )}
}

UserDataCardEdit.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default UserDataCardEdit;
