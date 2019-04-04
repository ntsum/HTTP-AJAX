import React from "react";

const Form = props => {
  function handleSubmit(e) {
    e.preventDefault();
    if (props.isUpdating) {
      props.updateFriend();
    } else {
      console.log('nope');
    }
  }

  return (
    <>
      <h2>Update Friends</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.handleChanges}
          value={props.friend.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={props.handleChanges}
          value={props.friend.age}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.handleChanges}
          value={props.friend.email}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Form;
