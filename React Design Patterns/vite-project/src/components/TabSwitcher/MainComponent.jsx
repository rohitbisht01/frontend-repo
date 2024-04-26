import TabSwitcher, { Tab, TabPanel } from "./TabSwitcher";

const MainComponent = () => {
  return (
    <TabSwitcher>
      <div>
        <Tab id="1">Tab 1</Tab>
        <Tab id="2">Tab 2</Tab>
        <Tab id="3">Tab 3</Tab>
      </div>
      <div>
        <TabPanel id="1">Content for Tab 1</TabPanel>
        <TabPanel id="2">Content for Tab 2</TabPanel>
        <TabPanel id="3">Content for Tab 3</TabPanel>
      </div>
    </TabSwitcher>
  );
};

export default MainComponent;
