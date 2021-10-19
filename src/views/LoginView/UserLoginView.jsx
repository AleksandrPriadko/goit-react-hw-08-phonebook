import React from "react";
import { Link } from "react-router-dom";

export function UserLoginView() {
  return (
    <div>
      <h2>Login to your account</h2>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            //value={email}
            placeholder="artur@gmail.com"
            //onChange={}
            required
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            // value={password}
            minLength="6"
            //onChange={handleChange}
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
