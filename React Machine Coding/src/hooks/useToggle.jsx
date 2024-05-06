import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [on, setOn] = useState(initialValue);

  const onToggle = (value) => {
    setOn(!on);
  };

  return { on, onToggle };
};
