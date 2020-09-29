import React from "react";

function Navbar(props) {
  console.log(props);
  // all this does is show information from the parent component
  return (
    <nav>
      <h4>Hello, {props.userInfo.username}!</h4>
      <img src={props.userInfo.imageURL} alt="user avatar" />
    </nav>
  );
}

export default Navbar;
