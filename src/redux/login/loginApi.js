const axios = require("axios").default;

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
console.log(token);

export function addUser(user) {
  return axios
    .post("/users/signup", user)
    .then(function (response) {
      console.log("Registr user", response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export function loginUser(userLogin) {
  return axios
    .post("/users/login", userLogin)
    .then(function (response) {
      console.log("Login user", response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
export function logoutUser() {
  return axios
    .post("/users/logout")
    .then(function (response) {
      console.log("lOGOUT user", response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
export function getUser() {
  return axios
    .get("/users/current")
    .then(function (response) {
      console.log("Get user", response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
