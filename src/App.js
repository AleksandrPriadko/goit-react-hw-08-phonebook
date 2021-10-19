import { Route, Switch } from "react-router-dom";
import { ContactsView } from "views/ContactsView/ContactsView";
import { RegistrationUserView } from "views/RegistrationView/RegistrationUserView";
import { UserLoginView } from "views/LoginView/UserLoginView";

export default function App() {
  return (
    <div>
      <div>
        <h1>Phone book of contacts</h1>
      </div>
      <Switch>
        <Route path="/register">
          <RegistrationUserView />
        </Route>
        <Route path="/login">
          <UserLoginView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
    </div>
  );
}
