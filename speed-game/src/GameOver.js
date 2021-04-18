import React from "react";

function GameOver(props) {
  const reset = () => {
    window.location.reload();
  };
  let text;

  if (props.score <= 3) {
    text = "C'mon! Let's play!";
  } else if (props.score > 3 && props.score < 7) {
    text = "Looking good my friend!";
  } /* if (props.score > 7) */ else {
    text = "Wow! Look at you!";
  }

  return (
    <div className="gameOver">
      <div className="result">
        <h1>GAME OVER</h1>
        <p>Score: {props.score}</p>
        <p>{text}</p>
        <button onClick={reset} id="close">
          Close
        </button>
      </div>
    </div>
  );
}

export default GameOver;
