import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';

import Home from './components/Home';
import CreateFlight from './components/Admin/CreateFlight';
import CreatePlane from './components/Admin/CreatePlane';
import SearchFlight from './components/SearchFlight';
import UserName from './components/UserName';
import SeatBox from './components/SeatBox';

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = { Home } />

      <Route exact path = "/searchform" component = { SearchForm } />
      <Route path = "/:name/searchform" component = { UserName } />
      <Route path = "/searchform/:flight_id/SeatBox" component = { SearchFlight } />
      <Route exact path = "/seatbox" component = { SeatBox } />
      <Route exact path = "/CreatePlane" component = { CreatePlane } />
      <Route path = "/CreateFlight" component = { CreateFlight } />
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
