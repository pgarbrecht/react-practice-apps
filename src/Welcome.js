import React, { useState } from "react";

function Welcome() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessages] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formValid = firstName.length > 0 && lastName.length > 0;
    if (!formValid) {
      return;
    }
    setMessages(`hello, ${firstName} ${lastName}`);
  };
  return (
    <div>
    <h2>Welcome Message App</h2>
      <form onSubmit={submit}>
        <div>
          <label>first name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>last name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      {message}
    </div>
  );
}

export default Welcome;