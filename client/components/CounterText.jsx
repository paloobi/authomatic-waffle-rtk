import { useSelector } from "react-redux";

const CounterText = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <p>
      Value: <output>{count}</output>
    </p>
  );
};

export default CounterText;
