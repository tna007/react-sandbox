import React from "react";

function Circle(props) {
  // const clicked = () => {
  //   console.log(`You clicked ${props.id}`);
  // };
  return (
    <div
      className={`circle ${props.color}`}
      onClick={props.click} /* onClick={clicked} */
    ></div>
  ); // style={{backgroundColor: props.color}}
}

export default Circle;
