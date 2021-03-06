import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMsg: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    } else if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept the location request" />;
    }
  }

  render() {
    return (<div className="border red">{this.renderContent()}</div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
