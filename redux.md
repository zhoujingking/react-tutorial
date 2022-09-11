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