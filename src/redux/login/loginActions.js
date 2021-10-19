import { createAction } from "@reduxjs/toolkit";

// const getContactsRequest = createAction("GET_CONTACTS_REQUEST");
// const getContactsSuccess = createAction("GET_CONTACTS_SUCCESS");
// const getContactsError = createAction("GET_CONTACTS_FEILURE");
const addUserRequest = createAction("ADD_USER_REQUEST");
const addUserSuccess = createAction(
  "ADD_USER_SUCCESS",
  ({ name, email, password }) => {
    return {
      payload: {
        name,
        email,
        password,
      },
    };
  }
);
const addUserError = createAction("ADD_USER_FEILURE");
// const deleteContactsRequest = createAction("DELETE_CONTACTS_REQUEST");
// const deleteContactsSuccess = createAction("DELETE_CONTACTS_SUCCESS");
// const deleteContactsError = createAction("DELETE_CONTACTS_FEILURE");

export {
  //   getContactsRequest,
  //   getContactsSuccess,
  //   getContactsError,
  addUserRequest,
  addUserSuccess,
  addUserError,
  //   deleteContactsRequest,
  //   deleteContactsSuccess,
  //   deleteContactsError,
  //   changeFilter,
};
