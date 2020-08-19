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

  //each Class component must have render method
  render() {
    return (<div>
    <p>Latitude:{this.state.lat}</p>
    <p>Error: {this.state.errorMsg}</p>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
