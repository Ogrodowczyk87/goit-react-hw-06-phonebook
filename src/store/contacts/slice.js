import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction(state, { payload }) {
      state.contacts.push(payload);
    },

    deleteContactAction(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
