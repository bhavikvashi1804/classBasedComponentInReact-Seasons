import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMsg:'' };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
        //to update the state we must have to use setState
        this.setState({
          lat:position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          errorMsg:error.message,
        });
        //if we update errorMsg then it does not mean that it removes the lat
      }
    );
  }

  componentDidMount(){
    //used when we want load the data once at the time of component created
    //only called one time
    //when your component load first time
    console.log('My component was render on screen');
  }


  componentDidUpdate(){
    //any time when your component get updated 
    console.log('Component get updated');
    //after this react automatically called render() method
  }

  componentWillUnmount(){
    //clean up process
  }

  //each Class component must have render method
  render() {
    
    if(this.state.errorMsg && !this.state.lat){
      return (
        <div>
          Error: {this.state.errorMsg}
        </div>
      );
    }
    else if(!this.state.errorMsg && this.state.lat){
      return (
        <div>
          Latitude: {this.state.lat}
        </div>
      );
    }
    else{
      return (
        <div>
          Loading
        </div>
      );
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
