import React, { PureComponent as Component } from 'react';

import axios from 'axios'


class FlightGallery extends Component {
  constructor() {
    super();
    this.state = { flights: [] }
    axios.get("http://localhost:5000/flights.json").then( results => this.setState ( {flights: results.data} ) );
  }

  render() {
    return (
      <div>
        {this.state.flights.map( (f) => <p key= {f.id}>
          Origin: {f.origin}
          <br />
          Destination: {f.destination}
          <br />
          Date: {f.date}
          <br />
          Airplane: {f.airplane_id}
          </p>)}
          <hr />
      </div>
    );
  }
}

export default FlightGallery;

/////put in once code is merged
// <br />
// Airplane: {f.airplane.name}
