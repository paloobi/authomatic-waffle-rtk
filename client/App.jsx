import RegisterForm from "./components/RegisterForm";
import CounterUpButton from "./components/CounterUpButton";
import CounterDownButton from "./components/CounterDownButton";
import CounterIncrementBy from "./components/CounterIncrementBy";
import CounterText from "./components/CounterText";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      {token ? <p>Thanks for creating an account!</p> : <RegisterForm />}
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
