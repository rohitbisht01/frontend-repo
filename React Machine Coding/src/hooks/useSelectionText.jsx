import { useEffect, useState } from "react";

export const useSelectionText = (ref) => {
  // to store the selected text and tools

  const [data, setData] = useState({ showTools: false });

  // handle the mouseup event
  const onMouseup = () => {
    // get the window selection
    const selection = window.getSelection();

    // get the parent node
    const startNode = selection.getRangeAt(0).startContainer.parentNode;

    // get the end node
    const endNode = selection.getRangeAt(0).endContainer.parentNode;

    // if the current element is is not part of the selection node do not show tools
    if (!startNode.isSameNode(ref.current) || !startNode.isSameNode(endNode)) {
      setData({
        showTools: false,
      });
      return;
    }

    // get the coordinates of the selection
    const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect();

    // if not much is selected do not show tools
    if (!width) {
      setData({
        showTools: false,
      });
      return;
    }

    // if text is selected update the selection and the co-ordinates the y position is adjusted to show bar above the selection
    if (selection.toString()) {
      setData({
        x: x,
        y: y + window.scrollY - 25,
        showTools: true,
        selectedText: selection.toString(),
        width,
      });
    }
  };

  // handle selection on the mouseup event
  useEffect(() => {
    // add the event
    document.addEventListener("mouseup", onMouseup);

    // remove the listener
    return () => {
      document.removeEventListener("mouseup", onMouseup);
    };
  }, []);

  return data;
};
