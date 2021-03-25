import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Box name="Anh T" age="25" title="student" />
      <Box name="Dan R" age="28" title="ceo" />
      <Box name="Ted K" age="26" title="cfo" />
    </div>
  );
};

export default Main;
