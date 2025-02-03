import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <p>
        Clicked: <span>{count}</span> times {' '}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </p>
    </div>
  );
};

export default Counter;
