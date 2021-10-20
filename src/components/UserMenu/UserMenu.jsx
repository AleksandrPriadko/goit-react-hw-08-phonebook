import { useDispatch, useSelector } from "react-redux";
import { nameUser } from "../../redux/login/loginSelectors";
import { logoutUsers } from "../../redux/login/loginThunk";

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(nameUser);
  console.log(name);
  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logoutUsers())}>
        Log out
      </button>
    </div>
  );
}
