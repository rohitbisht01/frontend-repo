import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const DebouncedInput = () => {
  const [value, setValue] = useState("");
  const { debouncedText } = useDebounce(value, 1000);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter here to search..."
      />

      <hr />

      {debouncedText}
    </>
  );
};

export default DebouncedInput;
