import { Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthNav } from "../components/Auth/AuthNav";
import { RegistrationUserView } from "./RegistrationView/RegistrationUserView";
import { UserLoginView } from "./LoginView/UserLoginView";
import { UserMenu } from "../components/UserMenu/UserMenu";
import { isLoggedIn } from "../redux/login/loginSelectors";
import { ContactsView } from "./ContactsView/ContactsView";

export function AppBar() {
  //const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);
  console.log(isLogged);
  return (
    <div>
      <h1>Phone book of contacts</h1>
      <div>
        <Link to="/contacts">Contacts</Link>
      </div>
      {isLogged ? <UserMenu /> : <AuthNav />}

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
