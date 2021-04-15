import React from "react";

function PopUp(props) {
  return (
    <div className="popUp">
      <div className="container">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Phone number: {props.phoneNumber}</p>
        <p>Role:{props.role} </p>
        <p>Message: {props.message}</p>
        <div className="popUpBtn">
          <button type="submit">Confirm. Send it</button>
          <button type="submit">No. Do not send</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
