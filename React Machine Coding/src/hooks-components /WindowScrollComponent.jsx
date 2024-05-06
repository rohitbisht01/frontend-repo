import React from "react";
import { useWindowScroll } from "../hooks/useWindowScroll";

const WindowScrollComponent = () => {
  const [position, scrollTo] = useWindowScroll();

  console.log(position);
  return (
    <div>
      <button className="link" onClick={() => scrollTo(0, 1000)}>
        Scroll To (0, 1000)
      </button>
      <button className="link" onClick={() => scrollTo(0, 700)}>
        Scroll To (0, 700)
      </button>

      <h3>WindowScrollComponent Y axis</h3>
      {new Array(100).fill().map((_, index) => {
        return <p key={index}>{index}</p>;
      })}

      <div>
        <p>X Axis : {position.x}</p>
        <p>Y Axis : {position.y}</p>
      </div>
    </div>
  );
};

export default WindowScrollComponent;
