import useLocalStorage from "../custom-hooks/useLocalStorage";

const LocalStorage = () => {
  const [isOpen, setOpen] = useLocalStorage("is-open", false);

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}

      <hr />
      <br />

      <button onClick={toggleTheme}>Toggle Theme</button>
      {theme}
    </div>
  );
};

export default LocalStorage;
