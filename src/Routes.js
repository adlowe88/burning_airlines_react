import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SeatSelection from './components/SeatSelection';

import Home from './components/Home';
import CreateFlight from './components/Admin/CreateFlight';
import CreatePlane from './components/Admin/CreatePlane';

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = { Home } /
    </div>
  </Router>
);
// <Route path = "/seat_selection" component = { SeatSelection } />
export default Routes;

  // <Route path = "/searchform/:user_id" component = { SearchForm } />

// const Roster = () => (
//   <Switch>
//     <Route exact path='/roster' component={FullRoster}/>
//     <Route path='/roster/:number' component={Player}/>
//   </Switch>
// )
