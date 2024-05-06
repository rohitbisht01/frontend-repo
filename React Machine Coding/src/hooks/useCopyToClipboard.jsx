import { useState } from "react";

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState("");

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("clipboard is not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.error("Not copied");
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, copy };
};
