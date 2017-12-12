import React, { PureComponent as Component } from 'react';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json'

class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      content: { planes: [], origin: '', destination: '', date: ''}
    };

    const fetchAirplanes = () => {
      axios.get(SERVER_URL).then( results => this.setState (
        {airplanes: results.data} ) );
        setTimeout( fetchAirplanes, 4000 );
    }

    fetchAirplanes();
    this._handleSubmit = this._handleSubmit.bind(this);
    // this.saveFlight = this.saveFlight.bind(this);
  }
  saveFlight(f) {
    axios.post(SERVER_URL, {content: f}).then(results => {
      this.setState({airplanes: [results.data, ...this.state.content]})
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit={saveFlight};
    this.setState( { content: ''} );
  }

  _handleChangeFor = (propertyName) => (e) => {
    const { content } = this.state;
    const newContent = {
      ...content, [propertyName]: e.target.value
    };
    this.setState({ content: newContent });
  }

  render() {
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
        //how to test if JUST selected array went in? Does return make the return the current state?
          <select onChange={this._handleChangeFor('planes')} value={this.state.content.planes}>
            { this.state.content.planes.map( (p) => {
              return <option value={p.id}>{p.name}</option>
            } ) }
          </select>
          <label>Origin:</label>
          <input type="text" onChange={this._handleChangeFor('origin')} value={this.state.content.origin} />
          <label>Destination:</label>
          <input type="text" onChange={this._handleChangeFor('destination')} value={this.state.content.destination} />
          <label>Date:</label>
          <input type="date" onChange={this._handleChangeFor('date')} value={this.state.content.date} />
          <input type="submit" value="Add Flight" />
        </form>
      </div>
    );
  }
}

// function ListFlights(props) {
//   return(
//     <div>
//       <h1>flight list</h1>
//       { props.map( f => <p key = { f.id }>
//         {f.origin}
//         {f.destination}
//         {f.date}
//         {f.airplane}
//       </p>)}
//     </div>
//   );
// }
//
// ListFlights(this.state.content);

export default CreateFlight;
