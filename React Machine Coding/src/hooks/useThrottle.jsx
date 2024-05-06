import { useEffect, useRef, useState } from "react";

export const useThrottle = (value, delay = 500) => {
  const [throttledValue, setThrottledValue] = useState("");
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + delay) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, delay);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [value, delay]);

  return throttledValue;
};
