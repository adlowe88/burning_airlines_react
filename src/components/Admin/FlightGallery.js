import React, { PureComponent as Component } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';


class FlightGallery extends Component {
  constructor() {
    super();
    this.state = { flights: [] }
    axios.get("http://localhost:5000/flights.json").then( results => this.setState ( {flights: results.data} ) );
  }

  render() {
    return (
      <div>
        <hr />
        {this.state.flights.map( (f) => <p key= {f.id}>
          <Link to = {/searchform/+f.id}>Flight Number: { f.id }</Link><br />
          Origin: {f.origin}
          <br />
          Destination: {f.destination}
          <br />
          Date: {f.date}
          <br />
          Airplane: {f.airplane_id}
          <br />
          Seats Remaining: {f.seats_left}
          </p>)}
      </div>
    );
  }
}

export default FlightGallery;

/////put in once code is merged
// <br />
// Airplane: {f.airplane.name}
