import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addUserSuccess,
  loginUserSuccess,
  logoutUserSuccess,
} from "./loginActions";

const INITIAL_USER = {
  user: { name: null, email: null },
  token: null,
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
  [logoutUserSuccess]: (state, _) => [...state, INITIAL_USER],
});
export default registr;

//export default combineReducers({ registr });
