import React from "react";

const Friend = props => {
  return (
    <div
      className="cont"
      onClick={event => props.populateFriend(event, props.friend.id)}
    >
      <h1>{props.friend.name}</h1>
      <h2>{props.friend.age}</h2>
      <h2>{props.friend.email}</h2>
      <i
        class="fas fa-window-close"
        onClick={event => props.deleteFriend(event, props.friend.id)}
      />
    </div>
  );
};

export default Friend;
