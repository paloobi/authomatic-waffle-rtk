import { increment } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const CounterUpButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>+</button>;
};

export default CounterUpButton;
