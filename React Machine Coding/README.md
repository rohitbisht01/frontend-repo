Custom Hooks

- useDebounce Hook (useState + useEffect + setTimout and don't forget to clear the timer)

  - The useDebounce hook in React is a powerful tool that allows you to add debounce functionality to your components.
  - Debouncing is a technique used to delay the execution of a function until a certain amount of time has passed since the last invocation. This can be particularly useful when dealing with input fields or any situation where you want to limit the frequency of function calls.
  - https://typeofnan.dev/debouncing-with-react-hooks/

  Example, making an api call to backend when searching in the input element

- useThrottle Hook
- useLocalStorage Hook (useState + useEffect)

  - The useLocalStorage hook provides a convenient way to synchronize the state of a component with the data stored in local storage. It automatically reads the initial value from local storage when the component mounts and updates the local storage whenever the state changes

  Example, storing theme in the localStorage

- useSessionStorage Hook: Similar to useLocalStorage Hook

- usePrevious Hook (useRef + useEffect)

  - use useRef hook for persisting the previous state between state re-renders
  - use useEffect hook for performing side-effects means to store the previous value when a new value comes in.

  Example, scenarios where it is necessary to compare the current value with the previous one

- useCopyToClipboard Hook (useState + navigator.clipboard.writeText api)

  - The useCopyToClipboard hook copies the given text to
    the clipboard. It utilizes the modern navigator.clipboard.writeText method if available, which provides a more efficient and secure way to copy text.
  - Here writeText(text) used to copy the text and this operation is asynchronous and return promise.
