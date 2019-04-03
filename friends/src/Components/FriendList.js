import React, { Component } from "react";
import Friend from "./Friend";

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.friends.map((event, index) => {
          return (
            <Friend
              deleteFriend={this.props.deleteFriend}
              updateFriend={this.props.updateFriend}
              populateFriend={this.props.populateFriend}
              friend={event}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
