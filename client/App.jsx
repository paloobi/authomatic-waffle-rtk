import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import CounterUpButton from "./components/CounterUpButton";
import CounterDownButton from "./components/CounterDownButton";
import CounterIncrementBy from "./components/CounterIncrementBy";
import CounterText from "./components/CounterText";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {token && (
        <>
          <h1>Welcome!</h1>
          <p>Thanks for creating an account!</p>
        </>
      )}

      {!token && (isLogin ? <LoginForm /> : <RegisterForm />)}

      {!token &&
        (isLogin ? (
          <p>
            Don't an account?{" "}
            <a href="#" onClick={() => setIsLogin(false)}>
              Register
            </a>
          </p>
        ) : (
          <p>
            Have an account?{" "}
            <a href="#" onClick={() => setIsLogin(true)}>
              Login
            </a>
          </p>
        ))}

      <h2>Counter</h2>
      <CounterUpButton />
      <CounterDownButton />
      <br />
      <CounterIncrementBy />
      <CounterText />
    </div>
  );
};

export default App;
