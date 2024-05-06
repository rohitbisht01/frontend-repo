import { useRef } from "react";
import { useOnScreen, useOnScreen2 } from "../hooks/useOnScreen";

const Element = ({ number }) => {
  const ref = useRef();
  //   const isVisible = useOnScreen(ref);
  const isVisible = useOnScreen2(ref);

  return (
    <div ref={ref}>
      {number}
      {isVisible ? "I am on screen" : "I am invisible"}
    </div>
  );
};

const CheckOnScreen = () => {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(<Element key={i} number={i} />);
  }

  return arr;
};

export default CheckOnScreen;
