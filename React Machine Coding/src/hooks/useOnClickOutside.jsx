import { useEffect } from "react";

export const useOnClickOutside = (ref, callbackFunc) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // invoke the callback
      callbackFunc(event);
    };

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [ref, callbackFunc]);
};
