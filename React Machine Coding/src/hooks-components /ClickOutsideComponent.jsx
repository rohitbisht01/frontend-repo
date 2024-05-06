import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const ClickOutsideComponent = () => {
  const ref = useRef();

  const handleClickOutside = () => {
    console.log("handle click outside");
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleClickInside = () => {
    console.log("handle click inside");
  };

  return (
    <div>
      <button ref={ref} onClick={handleClickInside}>
        Click inside
      </button>
    </div>
  );
};

export default ClickOutsideComponent;
