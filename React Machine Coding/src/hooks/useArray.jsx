import { useState } from "react";

export const useArray = (defaultArr) => {
  const [array, setArray] = useState(defaultArr);

  const push = (element) => {
    setArray([...array, element]);
  };

  const remove = (index) => {
    setArray((arr) => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1, arr.length),
    ]);
  };

  const filter = (callback) => {
    setArray((arr) => arr.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((arr) => [
      ...arr.slice(0, index),
      newElement,
      ...arr.slice(index + 1, arr.length),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { clear, array, push, update, filter, remove };
};
