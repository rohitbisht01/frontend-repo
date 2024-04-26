import { useCallback, useState } from "react";

// In the above code, the increment function is created using useCallback, so it will only be recreated when the setCount function changes. This means that the Childcomponent will not re-render unnecessarily when the Parentcomponent re-renders due to a state update.

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child increment={increment} />
    </div>
  );
};

const Child = ({ increment }) => {
  return <button onClick={increment}>Increment by 1</button>;
};

const CallbackMemoization = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default CallbackMemoization;
