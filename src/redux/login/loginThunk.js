import { addUser } from "./loginApi";
import { addUserSuccess } from "./loginActions";
// export function getContacts() {
//   return function (dispatch) {
//     dispatch({ type: "GET_CONTACTS_REQUEST" });
//     return getContact()
//       .then((data) => {
//         return data.length > 0 ? dispatch(getContactsSuccess(data)) : null;
//       })
//       .catch((error) => {
//         dispatch({ type: "GET_CONTACTS_FEILURE", payload: error });
//       });
//   };
// }

export function addUsers(user) {
  return function (dispatch) {
    dispatch({ type: "ADD_USER_REQUEST" });
    return addUser(user)
      .then(({ data }) => {
        console.log(data);
        //dispatch(addUserSuccess(data));
      })
      .catch((error) => {
        dispatch({ type: "ADD_USER_FEILURE", payload: error });
      });
  };
}

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
