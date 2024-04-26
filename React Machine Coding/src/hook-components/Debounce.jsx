import { useState } from "react";
import { useDebounce } from "../custom-hooks/useDebounce";

const Debounce = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {debouncedValue}
    </div>
  );
};

export default Debounce;
