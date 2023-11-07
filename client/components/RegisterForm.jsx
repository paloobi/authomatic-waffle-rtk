import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form>
      <h1>Register</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="confirmPassword"
        id="confirmPassword"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
