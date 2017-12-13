import React, { PureComponent as Component } from 'react';
import SeatBox from './SeatBox';

class SearchFlight extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.flight_id}</h2>
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
