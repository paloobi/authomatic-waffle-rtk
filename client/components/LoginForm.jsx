import { useState } from "react";
import { useLoginMutation } from "../features/api";

const LoginForm = () => {
  const [login, { isLoading, isError, data }] = useLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // if (data) {
  //   console.log(data);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {isError && <p>Oops, there was an error. Try again?</p>}
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

      <button disabled={isLoading} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
