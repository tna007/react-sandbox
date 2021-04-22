import React from "react";

function View({ firstName, lastName, phoneNumber, role, message }) {
  return (
    <div className="view">
      <h3>This is your input</h3>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Role:{role} </p>
      <p>Message: {message}</p>
    </div>
  );
}

export default View;
