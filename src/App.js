// allowing us to use React and useState
import React, { useState } from "react";
// grab our components from our other files
import Login from "./Login";
import Navbar from "./Navbar";
// and get our nice styles goin on
import "./App.css";

// declare the name of our component
function App() {
  // and create a space for information to be stored about our user
  // this information will be passed to Navbar (via userInfo)
  // and will be updated via setUserInfo (passed to Login)
  const [userInfo, setUserInfo] = useState({});

  // render the contents of the return statement
  return (
    <div className="app">
      <Navbar userInfo={userInfo} />
      <Login setUserInfo={setUserInfo} />
    </div>
  );
}

export default App;
