import React, { PureComponent as Component } from 'react';

import axios from 'axios'

class FlightForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      origin: "",
      destination: "",
      date: "",
      planes: [],
      airplane_id: 0
    }
    this._handleSubmit = this._handleSubmit.bind(this)

    axios.get("http://localhost:5000/airplanes.json").then( results => this.setState ( {planes: results.data} ) )
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.submitForm(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Origin:</label>
          <input type="text" onChange={ (event) => this.setState({origin: event.target.value}) } value={ this.state.origin } />
          <label>Destination:</label>
          <input type="text" onChange={ (event) =>
          this.setState({destination: event.target.value}) } value={this.state.destination} />
          <label>Date:</label>
          <input type="date" className="submit-button" onChange={ (event) =>
          this.setState({date: event.target.value}) } value={this.state.date} />


          <select onChange={(event) => {this.setState({airplane_id: event.target.value})} }>
            <option value = "">Select airplane</option>
            { this.state.planes.map( (p) => {
              return <option value={p.id} key={p.id}>{p.name}</option>
            } ) }
          </select>


          <input type="submit" value="Add Flight" />

        </form>
      </div>
    );
  }
}

export default FlightForm;

// this.setState( {airplane_id: event.target.value} )
