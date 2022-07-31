import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  /* Whenever your state is dependent on previous state, 
      alwasy use below variant of useState
      where you pass an function in useState 
  */

  const handleCount = (val) => {
    setCount((prevCount) => prevCount + val);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={() => handleCount(1)}>+</button>
      <button onClick={() => handleCount(-1)}>-</button>
      <button onClick={handleResetCount}>Reset</button>
    </>
  );
};

export default App;
