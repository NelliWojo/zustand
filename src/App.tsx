import { useEffect } from "react";
import { useCounterStore } from "./store";

// for consts outside a function
const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count: ", count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    // logCount();
    setCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>IncrementAsync</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
