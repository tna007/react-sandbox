import React from "react";

const Header = () => {
  let date = new Date();
  let today =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  return (
    <header>
      <nav>
        <h1>Number counter</h1>
        <p>{today}</p>
      </nav>
    </header>
  );
};

export default Header;
