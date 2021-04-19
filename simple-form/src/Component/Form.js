import React from "react";

function Form({ value, showOverlay }) {
  return (
    <main>
      <form id="form">
        <div id="form-line">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            onChange={value}
            placeholder="First name"
            required
          />
        </div>
        <div id="form-line">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            onChange={value}
            placeholder="Last name"
            required
          />
        </div>

        <div id="form-line">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={value}
            placeholder="Enter phone number"
          />
        </div>

        <div id="form-line">
          <label htmlFor="role">Role</label>
          <select name="role" onChange={value}>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div id="form-line">
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            name="message"
            onChange={value}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="button"></div>
        <button type="submit" onClick={showOverlay}>
          Send
        </button>
      </form>
    </main>
  );
}

export default Form;
