import { useState, useEffect } from "react";

function Hello() {
  /*
  function createdFn() {
    console.log("Created!");

    return destroyedFn;
  }

  function destroyedFn() {
    console.log("Destroyed!");
  }

  useEffect(createdFn, []);
  */

  useEffect(() => {
    console.log("Created!");

    return () => console.log("Destroyed!");
  });

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((current) => !current);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
