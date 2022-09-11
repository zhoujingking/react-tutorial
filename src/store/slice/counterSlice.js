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
