import React, { Component } from "react";

import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    races: [],
    username: "",
    password: "",
    email: ""
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
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  registerUser = ev => {
    ev.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    axios
      .post("https://build-week-wps.herokuapp.com/signup", newUser)
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data,
          username: "",
          password: "",
          email: ""
        });
        // this.props.history.push("/login");
      });
  };

  render() {
    return (
      <>
        <div>
          {this.state.races.map(race => (
            <p>{race.track}</p>
          ))}
        </div>
        <div>
          <form onSubmit={this.registerUser}>
            <input
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.inputChange}
              placeholder="username"
            />
            <input
              name="password"
              value={this.state.password}
              type="text"
              onChange={this.inputChange}
              placeholder="password"
            />
            <input
              name="email"
              value={this.state.email}
              type="text"
              onChange={this.inputChange}
              placeholder="email"
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
