import { useArray } from "../hooks/useArray";

const ArrayImplementation = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  return (
    <div>
      <h4>Array Implementation</h4>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Update Second element with 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep elements less than 4
      </button>
      <button onClick={() => set([1, 2])}>Set to 1,2</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default ArrayImplementation;
