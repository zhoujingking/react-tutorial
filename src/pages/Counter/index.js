import React, { useReducer } from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../../store/slice/counterSlice";

import currentUserReducer from '../../reducers/currentUserReducer';

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

  const [currUser, dispatchR] = useReducer(currentUserReducer, {
    name: 'test',
    email: 'test'
  });

  const onUpdate = () => {
    dispatchR({
      type: 'UPDATE',
      payload: {
        name: 'godking',
        email: 'godking@jsfund.cn'
      }
    })
  }

  return (
    <>
      <h1>Redux counter demo page</h1>
      <h2>{count}</h2>
      <button onClick={onIncrement}>Incr</button>
      <button onClick={onIncrementAsync}>IncrAsync</button>
      <button onClick={onDecrement}>Decr</button>
      <hr/>
      <h1>useReducer demo</h1>
      <h2>username: {currUser.name}</h2>
      <h2>email: {currUser.email}</h2>
      <button onClick={onUpdate}>update user</button>
    </>    
  )
}