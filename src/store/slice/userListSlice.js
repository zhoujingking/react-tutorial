import { createSlice } from '@reduxjs/toolkit';

export const userListSlice = createSlice({
  name: 'userList',
  initialState: [],
  reducers: {
    addNewUser: state => {
      const id = state.length + 1;
      state.push({
        id,
        name: `user-${id}`,
        email: `user-${id}@gmail.com`
      })
    }
  }
})

export const { addNewUser } = userListSlice.actions;

export default userListSlice.reducer;
