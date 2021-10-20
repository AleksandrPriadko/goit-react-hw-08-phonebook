import { NavLink, Link } from "react-router-dom";

export function AuthNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </div>
  );
}
