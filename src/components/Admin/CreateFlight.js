import React, { PureComponent as Component } from 'react';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';

class CreateFlight extends Component {
  constructor() {
    super();
    this.state = { airplanes: [] };
  }

const fetchAirplanes = () => {
  axios.get(SERVER_URL).then( results => this.setState (
    {airplanes: results.data} ) );
}
fetchAirplanes();

// const fetchSecrets = () => {
//   axios.get(SERVER_URL).then( results => this.setState( {secrets: results.data} ) );
//   setTimeout( fetchSecrets, 4000 ); //Recursive. better than setInterval
// }
// fetchSecrets();

  render() {
    return(
      <div>
        <form>
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
