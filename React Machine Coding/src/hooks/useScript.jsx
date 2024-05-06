import { useEffect } from "react";
import { useState } from "react";

export const useScript = (src) => {
  // keep track of status of script if it is loaded or not
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    // if no url is previded then set the state to idle
    if (!src) {
      setStatus("idle");
      return;
    }

    // get the script to check if it is already sourced or not
    let script = document.querySelector(`script[src="${src}"]`);

    if (script) {
      // if the script is already loaded, get its status and udpate
      setStatus(script.getAttribute("data-status"));
    } else {
      // create script
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");

      // inject the script at the end of the body
      document.body.appendChild(script);

      // set the script status in a custom attribute
      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
      };

      // assing the event liisteners to monitor if script is loaded properly
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    }

    // helper function to update the script status
    const setStatusFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "errors");
    };

    // setup
    script.addEventListener("load", setStatusFromEvent);
    script.addEventListener("error", setStatusFromEvent);

    // clean up
    return () => {
      script.removeEventListener("load", setStatusFromEvent);
      script.removeEventListener("error", setStatusFromEvent);
    };
  }, [src]);

  return status;
};
