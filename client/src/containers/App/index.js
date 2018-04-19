import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "components/Footer"
import AppHeader from "components/Header"
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
                 <Link to="/organizations">Organizations</Link>
              </List.Content>
            </List.Item>
          </List>
          <Container text>
          <Route exact path="/" component={Home} />
          <Route exact path="/organizations" component={Organizations} />
          </Container>
        </Container>
      </Router>
    <Footer />
  </Container>
);

export default App;
