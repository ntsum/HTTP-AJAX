import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./Components/FriendList";
import Form from "./Components/Form";

const url = "http://localhost:5000";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get(`${url}/friends`)
      .then(res => {
        this.setState({
          friends: res.data,
          error: ""
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="friends">
          <FriendList friends={this.state.friends} />
        </div>
        <Form friend={this.state.friend} />
      </div>
    );
  }
}

export default App;
