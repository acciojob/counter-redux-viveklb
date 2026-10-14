
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './../styles/App.css';
import { decrement, increment } from "../store";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default App;
