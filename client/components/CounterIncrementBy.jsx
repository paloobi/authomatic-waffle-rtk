import { useState } from "react";
import { incrementBy } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";

const CounterIncrementBy = () => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="incrBy">Amount to Increment: </label>
      <input
        id="incrBy"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementBy({ amount: Number(amount) }))}>
        Increment By {amount}
      </button>
    </>
  );
};

export default CounterIncrementBy;
