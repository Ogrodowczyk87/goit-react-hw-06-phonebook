import { createSlice } from '@reduxjs/toolkit';
const initialState = { searchQuery: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    findContact(state, { payload }) {
      state.searchQuery = payload;
    },
  },
});
export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
