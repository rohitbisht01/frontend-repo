import { useFocus } from "../hooks/useFocus";

const FocusComponent = () => {
  const { focused, bind } = useFocus();

  return (
    <div>
      <p>this is input is : {focused ? "focused" : "not focused"}</p>
      <input {...bind} />
    </div>
  );
};

export default FocusComponent;
