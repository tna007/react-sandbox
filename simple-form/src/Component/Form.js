import React, { Component } from "react";

function Form(props) {
  return (
    <main>
      <form id="form">
        <div id="form-line">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            onChange={props.value}
            placeholder="First name"
            required
          />
        </div>
        <div id="form-line">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            onChange={props.value}
            placeholder="Last name"
            required
          />
        </div>

        <div id="form-line">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={props.value}
            placeholder="Enter phone number"
          />
        </div>

        <div id="form-line">
          <label htmlFor="role">Role</label>
          <input type="select" name="role" onChange={props.value}></input>
        </div>

        <div id="form-line">
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            name="message"
            onChange={props.value}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="button"></div>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default Form;
