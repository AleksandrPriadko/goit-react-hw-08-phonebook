import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import contactsReducer from "../redux/async/contactsReducer";
import loginReducer from "../redux/login/loginReducer";

const enhancer = applyMiddleware(thunk);

const store = configureStore({
  reducer: {
    user: loginReducer,
    contacts: contactsReducer,
    enhancer,
  },
});

export { store };
