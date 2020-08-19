import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
        //to update the state we must have to use setState
        this.setState({
          lat:position.coords.latitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //each Class component must have render method
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
