import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "components/Footer"
import Header from "components/Header"
import Organizations from "containers/Organizations/index.js"
import Home from "containers/Home/index.js"

const App = () => (
  <div className="App">
    <Header />
      <Router>
        <div className="app-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/organizations">Organization</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/organizations" component={Organizations} />
        </div>
      </Router>
    <Footer />
  </div>
);

export default App;
