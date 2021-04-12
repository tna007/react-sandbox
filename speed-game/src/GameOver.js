import React from "react";

function GameOver(props) {
  const reset = () => {
    window.location.reload();
  };
  return (
    <div className="gameOver">
      <div className="result">
        <h2>GAME OVER</h2>
        <p>Score: {props.score}</p>
        <button onClick={reset} id="close">
          Close
        </button>
      </div>
    </div>
  );
}

export default GameOver;
