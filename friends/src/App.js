import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./Components/FriendList";
import Form from "./Components/Form";

const url = "http://localhost:5000";

const clearedFriend = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  state = {
    friends: [],
    error: "",
    friend: clearedFriend,
    isUpdating: false
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

  handleChanges = event => {
    event.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  deleteFriend = (e, itemId) => {
    e.preventDefault();
    axios
      .delete(`${url}/friends/${itemId}`)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  populateFriend = (e, itemId) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === itemId),
      isUpdating: true
    });
  };

  updateFriend = () => {
    axios
      .put(`${url}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: clearedFriend
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <div className="friends">
          <FriendList
            deleteFriend={this.deleteFriend}
            friends={this.state.friends}
            populateFriend={this.populateFriend}
          />
        </div>
        <Form
          isUpdating={this.state.isUpdating}
          friend={this.state.friend}
          handleChanges={this.handleChanges}
          updateFriend={this.updateFriend}
        />
      </div>
    );
  }
}

export default App;
