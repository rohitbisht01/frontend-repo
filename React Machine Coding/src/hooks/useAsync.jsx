import { useState, useCallback, useEffect } from "react";

export const useAsync = (asyncFn) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  const refetch = useCallback(() => {
    // reset the state before call

    setState({
      data: null,
      error: null,
      isLoading: true,
    });

    return asyncFn()
      .then((response) => {
        setState({
          data: response,
          error: null,
          isLoading: false,
        });
      })
      .catch((error) => {
        setState({
          data: null,
          error: error,
          isLoading: false,
        });
      });
  }, [asyncFn]);

  useEffect(() => {
    refetch();
  }, []);

  const { data, error, isLoading } = state;

  return { data, error, isLoading };
};
