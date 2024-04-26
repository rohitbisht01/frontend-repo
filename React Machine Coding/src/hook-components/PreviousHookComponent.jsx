import { useState } from "react";
import usePrevious from "../custom-hooks/usePrevious";

const PreviousHookComponent = () => {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h3>Now : {count} </h3>
      <h3>Before: {previousCount} </h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousHookComponent;
