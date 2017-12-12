import React, { PureComponent as Component } from 'react';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/airplanes.json'

class CreatePlane extends Component {
  constructor() {
    super();
    this.state = {
      content: { name: '', rows: 0, columns: 0}
  };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeFor = this._handleChangeFor.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content ); //this line is incorrect
    this.setState( {content: '' } );
  }

  _handleChangeFor = (propertyName) => (e) => {
    const { content } = this.state;
    const newContent = {
      ...content, [propertyName]: e.target.value
    };
    this.setState({ content: newContent });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Name:</label>
          <input type="text" onChange={this._handleChangeFor('name')} value={ this.state.content.name } />
          <label>Number of Rows:</label>
          <input type="integer" onChange={this._handleChangeFor('rows')} value={ this.state.content.rows } />
          <label>Number of Columns:</label>
          <input type="integer" onChange={this._handleChangeFor('columns')} value={ this.state.content.columns } />
          <input type="submit" value="Add Plane"/>
        </form>
      </div>
    );
  }
}

export default CreatePlane;
