import React, { PureComponent as Component } from 'react';
// import { browserHistory } from 'react-router';

class Home extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      password: "",
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit( this.state.name );
    this.setState( { content: "" } );
    //redirect to SearchForm.js
    console.log(e.target.elements[0].value);
    const name = e.target.elements[0].value;
    const path = `/${name}`
    // browserHistory.push(path);

  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit = { this._handleSubmit }>
          Name: <input onChange = { (event) => this.setState({ name: event.target.value })} value = { this.state.name } />
          Password: <input onChange = { (event) => this.setState({ password: event.target.value })} value = { this.state.password } />
          <input type = "submit" value = "Login" />
        </form>
      </div>
    );
  }
}

export default Home;
