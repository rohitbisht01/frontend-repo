import { useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const scrollTo = (xAxis, yAxis) => {
    window.scrollTo(xAxis, yAxis);
  };

  useEffect(() => {
    const updatePosition = () => {
      setPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener("scroll", updatePosition);

    // initializing setting up the position to x:0 and y:0 on mounting
    // not required
    // updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return [position, scrollTo];
};
