import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUsers } from "../../redux/login/loginThunk";
import { useDispatch } from "react-redux";

export function UserLoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const USER_LOGIN = {
      email,
      password,
    };

    dispatch(loginUsers(USER_LOGIN));
  };

  return (
    <div>
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="artur@gmail.com"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            minLength="6"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      <span>Doesn't not have an account? </span>
      <Link to="/register">Sign up.</Link>
    </div>
  );
}
