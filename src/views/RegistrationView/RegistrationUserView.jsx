import React, { useState } from "react";

export function RegistrationUserView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cofirmPassword, setCofirmPassword] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);

        break;
      case "confirmPassword":
        setCofirmPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSignUp}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Artur"
            onChange={handleChange}
            required
          />
        </label>
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

        <label>
          <span>Confirm password</span>
          <input
            type="password"
            name="confirmPassword"
            value={cofirmPassword}
            minLength="6"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}