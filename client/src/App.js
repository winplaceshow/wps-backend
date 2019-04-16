import React, { Component } from "react";

import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    races: []
  };

  componentDidMount() {
    axios
      .get("https://build-week-wps.herokuapp.com/races")
      .then(res => {
        console.log(res.data);
        this.setState({
          races: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.races.map(race => (
          <p>{race.track}</p>
        ))}
      </div>
    );
  }
}

export default App;
