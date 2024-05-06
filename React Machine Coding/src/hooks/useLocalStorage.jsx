import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, fallbackValue) => {
  const [value, setValue] = useState(
    localStorage.getItem(storageKey) ?? fallbackValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
