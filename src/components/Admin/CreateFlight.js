import React, { PureComponent as Component } from 'react';

import axios from 'axios';

import FlightForm from './FlightForm';
import FlightGallery from './FlightGallery';

const SERVER_URL = 'http://localhost:5000/flights.json'

class CreateFlight extends Component {

  submittee(s){
    axios.post(SERVER_URL, s).then(results => {
      console.log(results)
      });
  }


    render() {
      return (
        <div>
          <FlightForm
          submitForm={ this.submittee }
          />
          <FlightGallery />
        </div>
      );
    }
}

export default CreateFlight;
