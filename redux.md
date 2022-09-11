# redux - pure
## installation:
``` npm install -S redux react-redux redux-thunk ```

## one file demo:
store.js
```
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const countReducer = (state = 0, action) => {
  const { type } = action;
  switch(type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const reducers = combineReducers({
  count: countReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

console.log(store)

export default store;
```

in component file:
``` dispatch({ type: 'DECREMENT' }) ```

## using redux-thunk

in component file:

```
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


dispatch(countReducerAsync()
```

# redux toolkit

``` npm install -S @reduxjs/toolkit ```

in counterSlice.js

```
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state = state + 1,
    decrement: state => state = state - 1
  }
});

console.log(counterSlice)

// action creators from slice
export const {
  increment, decrement
} = counterSlice.actions;

console.log(increment)
// reducers from slice
export default counterSlice.reducer;

```

in component file
```
import { increment, decrement } from "./counterSlice";
...
dispatch(increment())
```