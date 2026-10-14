
import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../store";
import './../styles/App.css';

const App = ({ count, decrement, increment }) => {
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps, { increment, decrement })(App);
