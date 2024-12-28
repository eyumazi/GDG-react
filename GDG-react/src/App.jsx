//Task 2 using useState
//implements useState function for the increament and decreament button and reset button
//including the bonus that the decrease button will be turned off when ever count reaches 0
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <h1>Task 2 increasing/Decreasing</h1>
        <button onClick={increase}>increase</button>
        <h2 className="Count">Count = {count}</h2>
        <button disabled={count == 0 ? true : false} onClick={decrease}>
          decrease
        </button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
