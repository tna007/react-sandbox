import React, { Component } from "react";

function Form() {
  return (
    <form id="form">
      <div id="form-line">
        <label for="firstName">First name</label>
        <input type="text" name="firstName" />
      </div>
      <div id="form-line">
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" />
      </div>

      <div id="form-line">
        <label for="phone">Phone number</label>
        <input type="text" name="phone" />
      </div>

      <div id="form-line">
        <label for="role">Role</label>
        <input type="select" name="role"></input>
      </div>
      <div className="button"></div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
