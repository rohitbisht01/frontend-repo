import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // update the state on initial load
    onResizeHandler();

    // assing events
    setUp();

    return () => {
      // clean assign events
      cleanUp();
    };
  }, []);

  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setState({
      isMobile,
      isTablet,
      isDesktop,
    });
  };

  // debounce the resize call
  const debounceCall = useDebounce(onResizeHandler, 500);

  const setUp = () => {
    window.addEventListener("resize", debounceCall, false);
  };

  const cleanUp = () => {
    window.removeEventListener("resize", debounceCall, false);
  };

  return state;
};

const useDebounce = (callbackFunc, delay = 500) => {
  useEffect(() => {
    const timerId = setTimeout(callbackFunc, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, callbackFunc]);
};
