import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "components/Footer"
import Header from "components/Header"
import Home from "containers/Home"

const App = () => (
  <div className="App">
    <Header />
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
