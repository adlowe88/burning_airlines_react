import React, { PureComponent as Component } from 'react';

import axios from 'axios';
import _ from 'underscore'

class PlaneGallery extends Component {
  constructor() {
    super();
    this.state = { planes: [] }
    axios.get("https://burningairlinesapp.herokuapp.com/airplanes.json").then( results => this.setState ( {planes: results.data} ) );
  }

  render() {
    return(
      <div class="plane-gallery">
        <hr />
        {this.state.planes.map( (p) => <div key= {p.id}>
          Airplane Name: {p.name}
        <br />
          Rows: {p.rows}
        <br />
<<<<<<< HEAD
        Columns: {p.columns}
        <br />
=======
          Columns: {p.columns}
>>>>>>> 8747850e70fd1f9248c5b449a4e7060ee30e5ebb
        <div className="seatGrid" style= {{width: `${p.columns * 20}px` }}>
          {_.range(p.rows*p.columns).map( (i) => { return <div className="eachSeat">i</div> } )}
        </div>

        </div>
        )}
      </div>
    );
  }
}

export default PlaneGallery;
