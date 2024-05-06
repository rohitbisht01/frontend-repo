import { useState } from "react";

export const useFocus = () => {
  const [focused, setFocused] = useState(false);

  return {
    focused,
    bind: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
  };
};
