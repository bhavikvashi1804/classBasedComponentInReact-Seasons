import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={lat:null};
  }
  
  //each Class component must have render method 
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.log(error);
      }
    );
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
