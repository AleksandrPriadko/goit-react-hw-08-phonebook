//import { Route, Switch } from "react-router-dom";
//import { ContactsView } from "views/ContactsView/ContactsView";
//import { RegistrationUserView } from "views/RegistrationView/RegistrationUserView";
//import { UserLoginView } from "views/LoginView/UserLoginView";
import { AppBar } from "./views/AppBar";

export default function App() {
  return (
    <div>
      <AppBar />
      {/* <Switch>
        <Route path="/" exact>
          <AppBar />
        </Route>
        <Route path="/register">
          <RegistrationUserView />
        </Route>
        <Route path="/login">
          <UserLoginView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch> */}
    </div>
  );
}
