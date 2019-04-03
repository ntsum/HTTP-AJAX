import React from "react";

const Form = props => {
  return (
    <>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">
          <strong>Add Friend</strong>
        </button>
      </form>
    </>
  );
};

export default Form;
