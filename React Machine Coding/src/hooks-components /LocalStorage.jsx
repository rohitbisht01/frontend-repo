import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [isOpen, setIsOpen] = useLocalStorage("is-open", false);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Show Content</div>}
      <button onClick={handleThemeChange}>Toggle Theme</button>
      <div>{theme}</div>
    </div>
  );
};

export default LocalStorage;
