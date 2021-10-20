import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addUserSuccess, loginUserSuccess } from "./loginActions";

const INITIAL_USER = {
  user: { name: "", email: "" },
  token: "",
  isLoggedIn: false,
};

const registr = createReducer(INITIAL_USER, {
  [addUserSuccess]: (state, { payload }) => {
    console.log("State reduc reg", state);
    console.log("Payload reduc reg", payload);
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [loginUserSuccess]: (state, { payload }) => {
    console.log("State reduc log", state);
    console.log("Payload reduc log", payload);
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },

  //[getContactsSuccess]: (_, { payload }) => payload,
  //   [deleteContactsSuccess]: (state, { payload }) => {
  //     return state.filter((contact) => contact.id !== payload);
  //   },
});
// const login = createReducer(INITIAL_USER, {
//   [loginUserSuccess]: (state, { payload }) => {
//     console.log("State reduc log", state);
//     console.log("Payload reduc log", payload);
//     state.user = payload.user;
//     state.token = payload.token;
//     state.isLoggedIn = true;
//   },

//   //[getContactsSuccess]: (_, { payload }) => payload,
//   //   [deleteContactsSuccess]: (state, { payload }) => {
//   //     return state.filter((contact) => contact.id !== payload);
//   //   },
// });

export default combineReducers({ registr });
