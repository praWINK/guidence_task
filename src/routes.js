import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from './containers/indexPage';
import './resources/css/App.css';

class Routes extends Component {
  render() {
    return(
    <Router >
      <div>
        <Route exact path="/" component={IndexPage}/>
      </div>
    </Router>
    );
  }
}

export default Routes;
