# GDG
Repository for react projects
# Implementing last session's lesson (useState and Props)
# Componets used
App.jsx basically contains the state task. 
Props.jsx contains props example.
## Props task 1 implementation - 
``` jsx
//Task 1
//updating dybamically using props
import PropTypes from "prop-types";
function PropsTask(props) {
  const cardStyle = {
    backgroundColor: props.customcolor,
    padding: "1em",
    borderRadius: "8px",
    color: "#fff",
  };

  return (
    <>
      <h1>Task 1 Using Props</h1>
      <div className="card" style={cardStyle}>
        <h4>Name: {props.name}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Age: {props.age}</h4>
      </div>
    </>
  );
}

PropsTask.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number,
  customcolor: PropTypes.string,
};

function Test() {
  return (
    <div>
      <PropsTask
        name="Eyuel"
        email="ey.mazi233@gmail.com"
        age={21}
        customcolor="#e94320"
      />
    </div>
  );
}

export default Test;

```
## State task 2 implementation - 
``` jsx
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

```
