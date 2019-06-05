import React from 'react';
import './App.css';

//road map: get location/enter location, use location to ping weather and ticket apis to get data, process data and show to user

class FWF extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      initial: true,
    };
  }

  generateTestButton = () => {
    return(
      <div>
        <button onClick={() => this.getUserLocation()}>testing button for location</button>
      </div>
    );
  }

  getUserLocation = () => {
    console.log('hello');
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.logLocation);
    }
  }

  logLocation = (position) =>{
    console.log(position);
  }

  render = () => {
    return(
      <div>
        {this.generateTestButton()}
      </div>
    );
  }

}

export default FWF;
