import RegisterForm from "./components/RegisterForm";
import CounterUpButton from "./components/CounterUpButton";
import CounterDownButton from "./components/CounterDownButton";
import CounterIncrementBy from "./components/CounterIncrementBy";
import CounterText from "./components/CounterText";

const App = () => {
  return (
    <div className="App">
      <RegisterForm />
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
