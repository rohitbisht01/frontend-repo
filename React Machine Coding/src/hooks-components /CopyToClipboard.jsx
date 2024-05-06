import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const text = "Lorem ipsum dolor sit.";

const CopyToClipboard = () => {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <div>
      <h4>{text}</h4>
      <button onClick={() => copy(text)}>
        {copiedText === null ? "Copy" : "Copied"}
      </button>

      <h3>Copied Text : {copiedText}</h3>
    </div>
  );
};

export default CopyToClipboard;
