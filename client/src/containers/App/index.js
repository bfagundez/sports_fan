import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "components/Footer"
import AppHeader from "components/Header"
import UserDetail from "containers/UserDetail/index.js"
import Users from "containers/Users/index.js"
import OrganizationDetail from "containers/OrganizationDetail/index.js"
import Organizations from "containers/Organizations/index.js"
import Home from "containers/Home/index.js"
import { Container, List, Icon, Divider } from 'semantic-ui-react'

const App = () => (
  <Container >
    <AppHeader />
      <Router>
        <Container>
          <List horizontal align='center'>
            <List.Item>
              <Icon circular name='home' />
              <List.Content verticalAlign='middle'>
                  <Link to="/">Home</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon circular name='home' />
              <List.Content verticalAlign='middle'>
                 <Link to="/my_profile">My Profile</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon circular name='home' />
              <List.Content verticalAlign='middle'>
                 <Link to="/users">Users</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon circular name='home' />
              <List.Content verticalAlign='middle'>
                 <Link to="/organizations">Organizations</Link>
              </List.Content>
            </List.Item>
          </List>
          <Container text>
          <Route exact path="/" component={Home} />
          <Route exact path="/organizations" component={Organizations} />
          <Route exact path="/organizations/:id" component={OrganizationDetail} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UserDetail} />
         </Container>
        </Container>
      </Router>
    <Footer />
  </Container>
);

export default App;
