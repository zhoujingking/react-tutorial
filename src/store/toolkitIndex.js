import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from './slice/counterSlice';
import UserListReducer from './slice/userListSlice';

const store = configureStore({
  reducer: {
    count: CounterReducer,
    userList: UserListReducer
  }
});

export default store;