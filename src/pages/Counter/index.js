import React from "react";

import { useSelector, useDispatch } from "react-redux";

const countReducerAsync = () => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state)
    setTimeout(() => {
      dispatch({
        type: 'INCREMENT'
      })
    }, 1000)    
  }
}

export default function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const onIncrement = () => dispatch({
    type: 'INCREMENT'
  });
  const onIncrementAsync = () => dispatch(countReducerAsync());
  const onDecrement = () => dispatch({
    type: 'DECREMENT'
  });
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