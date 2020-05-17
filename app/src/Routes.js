import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Overview from './views/Overview';
import Dashboard from './views/Dashboard';
import Blog from './views/Blog';

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
        <Route path="/" exact component={Overview} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Routes;