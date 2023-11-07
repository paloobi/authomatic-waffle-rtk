import { decrement } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const CounterDownButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrement())}>-</button>;
};

export default CounterDownButton;
