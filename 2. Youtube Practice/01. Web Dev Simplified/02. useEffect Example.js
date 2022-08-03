import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("Krishna");

  useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("unmounted");
    };
  }, [name]);

  return (
    <>
      <button onClick={() => setName("Madhav")}>Madhav</button>
      <button onClick={() => setName("Krishna")}>Krishna</button>
      <h3>{name}</h3>
    </>
  );
};

export default App;
