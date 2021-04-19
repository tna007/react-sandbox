import React from "react";

function PopUp({ firstName, lastName, phoneNumber, role, message }) {
  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="popUp">
      <div className="container">
        <p>
          First name: <span>{firstName}</span>
        </p>
        <p>
          Last name: <span>{lastName}</span>
        </p>
        <p>
          Phone number: <span>{phoneNumber}</span>
        </p>
        <p>
          Role:<span>{role}</span>{" "}
        </p>
        <p>
          Message: <span>{message}</span>
        </p>
        <div className="popUpBtn">
          <button type="submit" onClick={reset}>
            Confirm. Send it
          </button>
          <button type="submit" onClick={reset}>
            No. Do not send
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
