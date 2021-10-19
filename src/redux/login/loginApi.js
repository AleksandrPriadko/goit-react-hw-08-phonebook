const axios = require("axios").default;

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export function addUser(user) {
  return axios
    .post("/users/signup", user)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
