import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Overview from './Overview';
import Dashboard from './Dashboard';

function Routes() {
  return (
    <Router>
      <PrivateRoutes to={PublicRoutes}/>
    </Router>
  );
}

function PrivateRoutes(props) {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route component={props.to} />
      </Switch>
    </div>
  );
}

function PublicRoutes(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Overview}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default Routes;