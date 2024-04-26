import { createContext, useContext, useState } from "react";

// here we are passing state via context

const TabContext = createContext({
  activeId: "",
  handleClick: () => {},
});

const TabSwitcher = ({ children }) => {
  const [activeId, setActiveId] = useState("1");

  function handleClick(id) {
    setActiveId(id);
  }

  return (
    <TabContext.Provider value={{ activeId, handleClick }}>
      {children}
    </TabContext.Provider>
  );
};

const TabPanel = ({ id, children }) => {
  const { activeId } = useContext(TabContext);

  return <div>{activeId === id && children}</div>;
};

const Tab = ({ children, id }) => {
  const { handleClick } = useContext(TabContext);

  function selectTab() {
    handleClick(id);
  }

  return <button onClick={selectTab}>{children}</button>;
};

export default TabSwitcher;
export { TabPanel, Tab };
