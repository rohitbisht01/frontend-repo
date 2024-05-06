import { useState } from "react";
import { useThrottle } from "../hooks/useThrottle";

const ThrottleComponent = () => {
  const [val, setVal] = useState("");
  const throttledValue = useThrottle(val);

  return (
    <div>
      <input
        type="text"
        placeholder="enter text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />

      <p>
        Val: {val}
        <p>Throttled Value : {throttledValue}</p>
      </p>
    </div>
  );
};

export default ThrottleComponent;
