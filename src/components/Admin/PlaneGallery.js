import React, { PureComponent as Component } from 'react';

import axios from 'axios';

class PlaneGallery extends Component {
  constructor() {
    super();
    this.state = { planes: [] }
    axios.get("http://localhost:5000/airplanes.json").then( results => this.setState ( {planes: results.data} ) );
  }

  render() {
    return(
      <div>
        {this.state.planes.map( (p) => <p key= {p.id}>
        Airplane Name: {p.name}
        <br />
        Rows: {p.rows}
        <br />
        Columns: {p.columns}
        </p>)}
        <hr />
      </div>
    );
  }
}

export default PlaneGallery;
