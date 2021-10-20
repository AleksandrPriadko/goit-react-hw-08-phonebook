import { createAction } from "@reduxjs/toolkit";

// const getContactsRequest = createAction("GET_CONTACTS_REQUEST");
// const getContactsSuccess = createAction("GET_CONTACTS_SUCCESS");
// const getContactsError = createAction("GET_CONTACTS_FEILURE");
const addUserRequest = createAction("ADD_USER_REQUEST");
const addUserSuccess = createAction(
  "ADD_USER_SUCCESS"
  // , (data) => {
  // return {
  //   payload: {
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //   },
  // };
  // }
);
const addUserError = createAction("ADD_USER_FEILURE");
const loginUserRequest = createAction("LOGIN_USER_REQUEST");
const loginUserSuccess = createAction("LOGIN_USER_SUCCESS");
const loginUserError = createAction("LOGIN_USER_FEILURE");
const logoutUserError = createAction("LOGOUT_USER_FEILURE");
const logoutUserSuccess = createAction("LOGOUT_USER_SUCCESS");
const logoutUserRequest = createAction("LOGOUT_USER_REQUEST");
// const deleteContactsRequest = createAction("DELETE_CONTACTS_REQUEST");
// const deleteContactsSuccess = createAction("DELETE_CONTACTS_SUCCESS");
// const deleteContactsError = createAction("DELETE_CONTACTS_FEILURE");

export {
  addUserRequest,
  addUserSuccess,
  addUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
};
