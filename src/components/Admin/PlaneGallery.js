import React, { PureComponent as Component } from 'react';

import axios from 'axios';
import _ from 'underscore'

class PlaneGallery extends Component {
  constructor() {
    super();
    this.state = { planes: [] }
    axios.get("http://localhost:5000/airplanes.json").then( results => this.setState ( {planes: results.data} ) );
  }

  render() {
    return(
      <div>
        {this.state.planes.map( (p) => <div key= {p.id}>
        Airplane Name: {p.name}
        <br />
        Rows: {p.rows}
        <br />
        Columns: {p.columns}
        <div className="seatGrid">
          {_.range(p.rows*p.columns).map( (i) => { return <div className="eachSeat">i</div> } )}
        </div>

        </div>

          )}
        <hr />

      </div>
    );
  }
}

export default PlaneGallery;
