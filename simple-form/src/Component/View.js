import React from "react";

function View(props) {
  return (
    <footer>
      <h3>This is your input</h3>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Phone number: {props.phoneNumber}</p>
      <p>Role:{props.role} </p>
      <p>Message: {props.message}</p>
    </footer>
  );
}

export default View;
