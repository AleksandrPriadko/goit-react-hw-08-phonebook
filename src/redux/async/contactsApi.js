const axios = require("axios").default;

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export function getContact() {
  return axios
    .get("/contacts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export function addContact(contacts) {
  return axios
    .post("/contacts", contacts)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
export function deleteContact(id) {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => {
      return;
    })
    .catch((error) => {
      return error;
    });
}
