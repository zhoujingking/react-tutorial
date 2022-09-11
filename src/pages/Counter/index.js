import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../../store/slice/counterSlice";

const countReducerAsync = () => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state)
    setTimeout(() => {
      dispatch(increment())
    }, 1000)    
  }
}

export default function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const onIncrement = () => dispatch(increment());
  const onIncrementAsync = () => dispatch(countReducerAsync());
  const onDecrement = () => dispatch(decrement());
  return (
    <>
      <h1>Redux counter demo page</h1>
      <h2>{count}</h2>
      <button onClick={onIncrement}>Incr</button>
      <button onClick={onIncrementAsync}>IncrAsync</button>
      <button onClick={onDecrement}>Decr</button>
    </>    
  )
}