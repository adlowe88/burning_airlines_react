import React, { PureComponent as Component } from 'react';
import SeatBox from './SeatBox';
import axios from 'axios';

class SearchFlight extends Component {
  constructor () {
    super();
    this.state = {
      seats_left: 0
    }
  }
  render() {
    axios.get(`http://localhost:5000/flights/${this.props.match.params.flight_id}.json`).then( res => {  this.setState({ seats_left: res.data.seats_left }); console.log(res.data) } )
    return (
      <div>
        <h2>Flight Number: { this.props.match.params.flight_id }</h2>
        <h2>Seats Remaining: { this.state.seats_left } </h2>
        <SeatBox flightId = { this.props.match.params.flight_id }/>
      </div>
    );
  }
}

// export default React.createClass({
//   render() {
//     return (
//
//     )
//   }
// })

export default SearchFlight;
