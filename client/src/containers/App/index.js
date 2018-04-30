import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "components/Footer"
import AppMenu from "components/Menu"
import AppHeader from "components/Header"
import UserProfile from "containers/UserProfile/index.js"
import UserDetail from "containers/UserDetail/index.js"
import Users from "containers/Users/index.js"
import OrganizationDetail from "containers/OrganizationDetail/index.js"
import Organizations from "containers/Organizations/index.js"
import Home from "containers/Home/index.js"
import { Container } from 'semantic-ui-react'

const App = () => (
  <Container >
    <AppHeader />
      <Router>
        <Container>
          <AppMenu />
          <Route exact path="/" component={Users} />
          <Route exact path="/organizations" component={Organizations} />
          <Route exact path="/organizations/:id" component={OrganizationDetail} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UserDetail} />
          <Route exact path="/my_profile/:id" component={UserProfile} />
        </Container>
      </Router>
    <Footer />
  </Container>
);

export default App;
