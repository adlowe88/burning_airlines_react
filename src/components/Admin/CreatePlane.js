import React, { PureComponent as Component } from 'react';

import axios from 'axios';

import PlaneForm from './PlaneForm';
import PlaneGallery from './PlaneGallery';

const SERVER_URL = 'http://localhost:5000/airplanes.json'

class CreatePlane extends Component {

  submittee(s){
    axios.post(SERVER_URL, s).then(results => {
      console.log(results)
    });
  }

  render() {
    return (
      <div>
        <PlaneForm
          submitForm={ this.submittee }
        />
        <PlaneGallery />
      </div>
    );
  }
}

export default CreatePlane;
