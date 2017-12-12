import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateFlight from './components/Admin/CreateFlight';
import CreatePlane from './components/Admin/CreatePlane';

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = { Home } />
      <Route exact path = "/createflight" component = { CreateFlight } />
      <Route exact path = "/createplane" component = { CreatePlane } />
    </div>
  </Router>
);

export default Routes;

// const Roster = () => (
//   <Switch>
//     <Route exact path='/roster' component={FullRoster}/>
//     <Route path='/roster/:number' component={Player}/>
//   </Switch>
// )
