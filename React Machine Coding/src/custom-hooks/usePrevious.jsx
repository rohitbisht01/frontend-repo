import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  // here ref.current is returned before the useEffect  update, it return the previous value, by default there is no value so for now it will return undefined
  return ref.current;
};

export default usePrevious;
