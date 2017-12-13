import React, { PureComponent as Component } from 'react';

class SearchFlight extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.flight_id}</h2>
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
