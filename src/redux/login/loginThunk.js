import { addUser, loginUser, token, logoutUser, getUser } from "./loginApi";
import {
  addUserRequest,
  addUserSuccess,
  addUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
} from "./loginActions";

export function addUsers(user) {
  return function (dispatch) {
    dispatch(addUserRequest);
    return addUser(user)
      .then(({ data }) => {
        console.log("Sign up thunk", data);
        token.set(data.token);
        return dispatch(addUserSuccess(data));
      })
      .catch((error) => {
        dispatch(addUserError(error));
      });
  };
}
export function loginUsers(userLogin) {
  return function (dispatch) {
    dispatch(loginUserRequest);
    return loginUser(userLogin)
      .then(({ data }) => {
        console.log("Login thunk", data);
        token.set(data.token);
        console.log("Token log", data.token);
        return dispatch(loginUserSuccess(data));
      })
      .catch((error) => {
        dispatch(loginUserError(error));
      });
  };
}
export function logoutUsers() {
  return function (dispatch) {
    dispatch(logoutUserRequest);
    return logoutUser()
      .then(() => {
        console.log("Logout thunk");
        token.unset();
        dispatch(logoutUserSuccess());
      })
      .catch((error) => {
        dispatch(logoutUserError(error));
      });
  };
}
// export function getUsers() {
//   return function (dispatch) {
//     dispatch({ type: "GET_USER_REQUEST" });
//     return getUser()
//       .then((response) => {
//         console.log("Get user thunk", response);

//         dispatch({ type: "GET_USER_SUCCESS", payload: response });
//       })
//       .catch((error) => {
//         dispatch({ type: "GET_USER_FEILURE", payload: error });
//       });
//   };
// }

// export function deleteContacts(id) {
//   return function (dispatch) {
//     dispatch({ type: "DELETE_CONTACTS_REQUEST" });
//     return deleteContact(id)
//       .then(() => {
//         dispatch(deleteContactsSuccess(id));
//       })
//       .catch((error) => {
//         dispatch({ type: "DELETE_CONTACTS_FEILURE", payload: error });
//       });
//   };
// }
