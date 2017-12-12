import React, { PureComponent as Component } from 'react';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json'

class CreateFlight extends Component {
  constructor() {
    super();
    this.state = { airplanes: [] };
    this._handleSubmit = this._handleSubmit.bind(this);
    this.saveFlight = this.saveFlight.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    //what happens on submit?
  }

// const fetchAirplanes = () => {
//     axios.get(SERVER_URL).then( results => this.setState (
//       {airplanes: results.data} ) );
//       setTimeout( fetchAirplanes, 4000 );
//   }
// fetchAirplanes();
//
// saveFlight(f) {
//   axios.post(SERVER_URL, /*add in what im sending*/).then(results => {
//     this.setState({airplanes: [results.data, ...this.state.airplanes]})
//   });
// }

  render() {
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
          <select>
            { this.state.airplanes.map( (a) => {
              return <option value={a.id}>{a.name}</option>
            } ) }
          </select>
          <input type="text" value="Origin"/>
          <input type="text" value="Destination" />
          <input type="date" value="Date" />
          <input type="submit" value="Add Flight" />
        </form>
      </div>
    );
  }
}

export default CreateFlight;
