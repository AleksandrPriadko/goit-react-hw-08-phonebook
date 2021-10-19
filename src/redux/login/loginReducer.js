import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addUserSuccess } from "./loginActions";

const user = createReducer([], {
  [addUserSuccess]: (state, { payload }) => [...state, payload],
  //[getContactsSuccess]: (_, { payload }) => payload,
  //   [deleteContactsSuccess]: (state, { payload }) => {
  //     return state.filter((contact) => contact.id !== payload);
  //   },
});

export default combineReducers({ user });
