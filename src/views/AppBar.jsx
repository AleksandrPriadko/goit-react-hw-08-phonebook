import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthNav } from "../components/Auth/AuthNav";
import { RegistrationUserView } from "./RegistrationView/RegistrationUserView";
import { UserLoginView } from "./LoginView/UserLoginView";
import { UserMenu } from "../components/UserMenu/UserMenu";
import { isLoggedIn } from "../redux/login/loginSelectors";

export function AppBar() {
  //const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);
  console.log(isLogged);
  return (
    <div>
      <h1>Phone book of contacts</h1>
      {isLogged ? <UserMenu /> : <AuthNav />}

      <Switch>
        <Route path="/register">
          <RegistrationUserView />
        </Route>
        <Route path="/login">
          <UserLoginView />
        </Route>
      </Switch>
    </div>
  );
}
