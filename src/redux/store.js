import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../redux/async/contactsReducer";
import loginReducer from "../redux/login/loginReducer";
import logger from "redux-logger";

const enhancer = applyMiddleware(thunk);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, loginReducer),
    contacts: contactsReducer,
    enhancer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
