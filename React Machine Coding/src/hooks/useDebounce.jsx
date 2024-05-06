import { useState, useEffect } from "react";

export const useDebounce = (searchText, delay = 500) => {
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(searchText);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return { debouncedText };
};
