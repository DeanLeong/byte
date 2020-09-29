// allow ourselves to use React and useState in this component
import React, { useState } from "react";

// declare the name of our component and that we want to use props
function Login(props) {
  // creating our useStates to store our information
  const [username, setUsername] = useState("");
  const [imageURL, setImageURL] = useState("");
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();
    // property shorthand
    // handle the form submission by saving the information into a variable
    const info = {
      username,
      imageURL,
    };
    // using the setter from the parent component to bring the information up (lift)
    props.setUserInfo(info);
    console.log("submitted!");
    // and then clearing our forms
    setUsername("");
    setImageURL("");
  };

  // render jsx elements including a form, several inputs, and a button
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        name="imageURL"
        value={imageURL}
        onChange={(event) => setImageURL(event.target.value)}
      />
      {/* when we click this dude, the submit event from the form goes off */}
      <button type="submit">TIME TO GET SOCIAL</button>
    </form>
  );
}

export default Login;
