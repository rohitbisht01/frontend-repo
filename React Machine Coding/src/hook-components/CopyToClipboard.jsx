import { useCopyToClipboard } from "../custom-hooks/useCopyToClipboard";

const text = "Lorem ipsum dolor sit.";

const CopyToClipboard = () => {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copy(text)}>{text}</button>
      <p>Copied Value : {copiedText ?? "Nothing is Copied yet!!"}</p>
    </div>
  );
};

export default CopyToClipboard;
