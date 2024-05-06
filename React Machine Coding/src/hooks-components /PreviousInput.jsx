import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const PreviousInput = () => {
  const [count, setCount] = useState(0);

  const previousValue = usePrevious(count);

  return (
    <div>
      <h3>Now : {count}</h3>
      <h3>Previous : {previousValue}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousInput;
