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