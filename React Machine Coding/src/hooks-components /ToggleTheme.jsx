import { useToggle } from "../hooks/useToggle";

const ToggleTheme = () => {
  const { on, onToggle } = useToggle(false);

  return (
    <div>
      <button onClick={onToggle}>Toggle Theme</button>
      {on ? "dark mode" : "light mode"}
    </div>
  );
};

export default ToggleTheme;
