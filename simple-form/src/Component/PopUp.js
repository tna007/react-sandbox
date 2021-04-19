import React from "react";

function PopUp(props) {
  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="popUp">
      <div className="container">
        <p>
          First name: <span>{props.firstName}</span>
        </p>
        <p>
          Last name: <span>{props.lastName}</span>
        </p>
        <p>
          Phone number: <span>{props.phoneNumber}</span>
        </p>
        <p>
          Role:<span>{props.role}</span>{" "}
        </p>
        <p>
          Message: <span>{props.message}</span>
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
