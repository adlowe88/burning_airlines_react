import React, { PureComponent as Component } from 'react';

import axios from 'axios'


class PlaneForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      rows: 0,
      columns: 0
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.submitForm(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Name:</label>
          <input type="text" onChange={ (event) => this.setState({name: event.target.value}) } value={ this.state.name } />
          <label>Rows:</label>
          <input type="number" onChange={ (event) => this.setState({rows: event.target.value}) } value={this.state.rows} />
          <label>Columns:</label>
          <input type="number" onChange={ (event) => this.setState({columns: event.target.value}) } value={this.state.columns} />

          <input type="submit" value="Add Plane" />
        </form>
      </div>
    );
  }
}

export default PlaneForm;
