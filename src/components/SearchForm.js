import React, { PureComponent as Component } from 'react';
import Home from './Home';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json'

class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      content: {
        origin: "",
        destination: "",
        seats_left: 0,
      },
      flights: [],
      flightsToList: []
     };
    this._handleSubmit = this._handleSubmit.bind(this);

    //  const fetchAirplanes = () => {
   axios.get(SERVER_URL).then( results => { this.setState({flights: results.data}) } );
  }


  checkFlights (flights, flightsToList) {

    for (let i = 0; i < flights.length; i++) {
      if ((this.state.flights.origin === this.state.content.origin )
          && ( this.state.flights.destination === this.state.content.destination )
          && ( this.state.flights.seats_left > 0 )) {
            flightsToList.push(flights[i]);
      };
    }
    this.setState( { flightsToList } );

  }

  //Attached to the form itself, listening for the form to be submitted
  _handleSubmit(e) {
    // e.preventDefault();
    // console.log( this.state.content );
    //need to change where content object is sent to
    // this.props.onSubmit( this.state.content );
    // this.setState( { content: "" } );
    this.checkFlights(this.state.flights, this.state.flightsToList);
    console.log(this.state.flightsToList);
  }


  _handleChangeFor = (propertyName) => (event) => {
    const { content } = this.state;
    const newContent = {
      ...content,
      [propertyName]: event.target.value
    };
    this.setState({ content: newContent });

  }

  // Origin: <input onChange = { (event) => this.setState({ content[origin]: event.target.value })} value = { this.state.content.origin } />
  // Destination: <input onChange = { (event) => this.setState({ content.destination: event.target.value })} value = { this.state.content.destination } />

  render() {
    return (
      <div>
        <form onSubmit = { this._handleSubmit }>
          Origin: <input type="text" onChange={this._handleChangeFor('origin')} value={this.state.content.origin}/>
          Destination: <input type="text" onChange={this._handleChangeFor('destination')} value={this.state.content.destination}/>
          <input type = "submit" value = "Search" />
        </form>
        <ListFlights
          flightsToList = { this.state.flightsToList }
          origin = { this.state.content.origin }
          destination = { this.state.content.destination }
          seats_left = { this.state.content.seats_left }
        />
      </div>
    );
  }
}

function ListFlights(props) {

  return (
    <div>
      { props.flightsToList.map( s => <p key = { s.id }>
      Origin: { s.origin }
      Destination: { s.destination }
      Seats Remaining: { s.seats_left }
     </p>) }
    </div>
  );
}

// <h2>Flights Available</h2>
//  c

// { this.props.flights.origin === this.props.origin }

//      props.content.map( s => <p key = { s.id }>
//      Origin: { s.content.origin }
//      Destination: { s.content.destination }
//      Seats Remaining: { s.content.seats_left}
//      </p>)
//    }



  //map flights to render a flight if this next bit
  //if this.props.flights.origin === this.props.origin



export default SearchForm;
