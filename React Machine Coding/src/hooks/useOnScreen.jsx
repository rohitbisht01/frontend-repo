import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  // monitor the interaction
  const observer = new IntersectionObserver(
    ([entry]) => {
      // udpate the state on intersection
      setIsIntersecting(entry.isIntersecting);
    },
    {
      threshold: 1.0,
    }
  );

  useEffect(() => {
    // assign the observer
    observer.observe(ref.current);

    // remove the obser as soon as the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export function useOnScreen2(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  // determine if the element is visible
  const observer = function () {
    const offset = 50;
    const top = ref.current.getBoundingClientRect().top;
    setIntersecting(top + offset >= 0 && top - offset <= window.innerHeight);
  };

  useEffect(() => {
    // first check
    observer();

    // assign the listener
    window.addEventListener("scroll", observer);

    // remove the listener
    return () => {
      window.removeEventListener("scroll", observer);
    };
  }, []);

  return isIntersecting;
}
