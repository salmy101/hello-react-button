import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { reset } = props;
  return (
    <div>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

const Application = () => {
  // your code here
  const [name, setName] = useState();

  const reset = () => {
    console.log("reset");
    // your code here
    if (name) {
      setName(" ");
    }
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type Your Name"
      ></input>
      <Button reset={reset} />
      {name && <h1>Hello {name}</h1>}
      {!name && <h1></h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
