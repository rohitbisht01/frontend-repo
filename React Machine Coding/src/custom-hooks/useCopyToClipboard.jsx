import { useState } from "react";

// export const useCopyToClipboard = () => {
//   const [copiedText, setCopiedText] = useState("");

//   const copyFn = async (text) => {
//     if (!navigator?.clipboard) {
//       console.warn("Clipboard is not supported");
//       return false;
//     }

//     try {
//       await navigator.clipboard.writeText(text);
//       setCopiedText(text);
//       return true;
//     } catch (error) {
//       console.warn("Copy failed", error);
//       setCopiedText(null);
//       return false;
//     }
//   };

//   return { copiedText, copyFn };
// };

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState("");

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not found");
      return false;
    }

    // try save to clipboard then save it in the state
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error("Failed copying the text", error);
      setCopiedText(null);
    }
  };

  return { copiedText, copy };
};
