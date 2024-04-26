import Quiz from "./components/quiz-application/Quiz";
import Debounce from "./hook-components/Debounce";
import LocalStorage from "./hook-components/LocalStorage";
import CopyToClipboard from "./hook-components/CopyToClipboard";
import DebounceFiltering from "./hook-components/DebounceFiltering";
import PreviousHookComponent from "./hook-components/PreviousHookComponent";

const App = () => {
  return (
    <div>
      {/* <Quiz /> */}
      {/* <Debounce /> */}
      {/* <LocalStorage /> */}
      {/* <PreviousHookComponent /> */}
      {/* <DebounceFiltering /> */}
      <CopyToClipboard />
    </div>
  );
};

export default App;
