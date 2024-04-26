import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {props.renderTextBelow(value)}
    </div>
  );
};

const RenderPropPattern = () => {
  const showValue = (value) => {
    return <div>The multiplied vlaue is {value * 10}</div>;
  };

  // we can achive this by both ways as both doing same but the way it should be written in production ready code

  return (
    <div>
      <Input renderTextBelow={(value) => <>The value is {value}</>} />
      <Input renderTextBelow={showValue} />
    </div>
  );
};

export default RenderPropPattern;
