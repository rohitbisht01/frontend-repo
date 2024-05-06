Custom Hooks

1. Difference between Throttling and Debouncing -https://stackoverflow.com/questions/25991367/difference-between-throttling-and-debouncing-a-function

- useDebounce Hook (useState + useEffect + setTimout and don't forget to clear the timer)

  - The useDebounce hook in React is a powerful tool that allows you to add debounce functionality to your components.
  - Debouncing is a technique used to delay the execution of a function until a certain amount of time has passed since the last invocation. This can be particularly useful when dealing with input fields or any situation where you want to limit the frequency of function calls.
  - https://typeofnan.dev/debouncing-with-react-hooks/

  Example, making an api call to backend when searching in the input element

- useThrottle Hook (useState + useEffect + useRef + setTimeout)

  - The useThrottle hook offers a controlled way to manage execution frequency in a React application. By accepting a value and an optional interval, it ensures that the value is updated at most every interval milliseconds. This is particularly helpful for limiting API calls, reducing UI updates, or mitigating performance issues by throttling computationally expensive operations.
  - Throttling is a technique, where a given function runs only once at a specified period of time
  - Throttling could be used in scenarios, where our code does expensive CPU/Network tasks on frequently fired events:
    - Listening to HTML Input element change
    - Listening to window resize or scroll
    - Listening to mouse cursor position change

  For example, consider a scenario where we want to make an API call to the server on a button click.

  If the user spam the click then this will make an API call on each click. This is not what we want, we want to restrict the no of API calls that can be made. The other call will be made only after a specified interval of time.

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

- useFetch (useState + useEffect using fetch or axios)

  - The useFetch React hook is useful for handling data fetching and state management in React components. It allows you to easily fetch data from a specified URL using the fetch API and provides a consistent pattern for handling loading, success, and error states.

- useAsync (useState + useEffect + useCallback)

  - The useAsync hook takes in a callback function that performs the asynchronous operation and an optional array of dependencies. It returns an object with three properties: loading, error, and value. The loading property indicates whether the operation is currently in progress, while the error property holds any error messages encountered during the process. Finally, the value property contains the resolved value of the asynchronous operation.
  - https://medium.com/@sergeyleschev/react-custom-hook-useasync-8fe13f4d4032

  Example, useAsync can be employed in a wide range of scenarios. Whether you’re fetching data from an API, performing computations, or handling form submissions

- useToggle Hook (useState)

  - it takes a parameter with value true or false and toggles that value to opposite.
  - It’s useful when we want to take some action into its opposite action,
  - A toggle allows the user to change a setting between two states which are checked and unchecked, each state can trigger its own set of actions.
  - https://irmakesin.medium.com/creating-custom-react-hooks-usetoggle-c50b8925d503

  Example: show and hide modal, show more/show less text, open/close side menu.

  We can use toggle hook to tick mark for checkbox, play or pause a video, flip the visibility of anything, etc.

- useFocus Hook (useState + Event)

  - https://codesandbox.io/p/sandbox/react-usefocus-forked-sn79qk?file=%2Fsrc%2Findex.js

- useIdle Hook (useState + useEffect + useRef + event )

  - useIdle() hook in React that will return the boolean value depending upon the active or inactive state of the user after a defined amount of time.
  - detecting user inactivity within a web application. It tracks user interaction and determines if a specified duration of time has passed without any activity.

  - The logic to implement is straightforward, we will use a useState to monitor the user’s active status and useEffect to assign the event listeners on the window object as well as document and later remove the listeners during cleanup.
  - Using useRef we will track a setTimeout that will change status if the user has not performed any action for the duration received as input, else clear the timer and start a fresh timeout.
  - https://learnersbucket.com/examples/interview/useidle-hook-in-react/

  Example, This hook is particularly handy for implementing features like automatic logout, displaying notifications after a period of inactivity, or adjusting UI elements based on user engagement.

- useWindowScroll

  - Useful for tracking and manipulating the scroll position of a web page within a React component. It allows you to easily access the current scroll coordinates (x and y)
  - This hook is helpful when building components that require dynamic behavior based on the scroll position, such as lazy-loading content, infinite scrolling, or implementing smooth scrolling animations.

- useOnClickOutside ( useEffect + useRef + Event )

  - useful for detecting clicks outside a specific component.
  - The listener function will look at the event, and if the user clicked on the ref, or any children inside of the ref, we're not doing anything, we'll just exit the function. Otherwise, if the user clicked outside of the ref , we'll call the handler function we passed to the useOnClickOutside hook.
  - listener is used to handle the mouse down and touch start events. In the listener, we need to check if the click event occurs on the specified element or not. If the event occurs on the specified element, the callback will not be called. If the event occurs outside the specified element, the callback will be called.

  - Whenever the click event or touch event occurs in the document, they will capture the event. the Touch start event listener is to handle the cases in mobile phones or touch devices.

  - https://designcode.io/react-hooks-handbook-useonclickoutside-hook
  - https://raj111.medium.com/understanding-the-useonclickoutside-hook-in-reactjs-3b5ccddd540c

  Example, Opening and closing a dialog, like when the user clicks outside the dialog it closes.

  Whether you're working on a modal, a dropdown menu, or any other component that needs to close when someone clicks outside of it, this hook can help.

- useArray Hook ( useState + array methods implementation)

- useResponsive Hook ( useState + resize event + useEffect + window.innerWidth + debounce the function call )

  - Hook that returns the device type (isMobile, isTablet, isDesktop) depending upon the window width.
  - Use Case : Many times we require to conditionally render components depending upon the device, rather than hiding and showing through CSS we can use this hook.

  - For this, we will assign an event listener to the window object and listen to the resize event on the function onResizeHandler() that will update the state when ever user resizes the screen.

- useOnScreen Hook

  - Tracking the component’s visibility can be really handy in multiple cases, especially for performance, when you want to load to the media like image, video, audio, etc. only when the component is in the viewport or is visible.

    Another case is when you want to track the user activity like when the user is a starring a product (product is in the viewport) so that you can use this data for recommendations.

    - There are two ways to implement it

    1. Using Intersection Observer.
    2. Using getBoundingClientRect().

  - https://learnersbucket.com/examples/interview/useonscreen-hook-in-react/
  - https://medium.com/@sergeyleschev/react-custom-hook-useonscreen-e01dfa2b51fa

- useScript Hook
  - The useScript hook is useful for dynamically loading external JavaScript scripts into a React component. It manages the loading and status of the script, allowing you to conditionally render components or perform actions based on whether the script has been successfully loaded or encountered an error. The hook keeps track of the script’s status and provides this status as a return value. Additionally, it offers options to remove the script when the component is unmounted, ensuring proper cleanup.
  - https://learnersbucket.com/examples/interview/usescript-hook-in-react/
  - https://dev.to/sergeyleschev/react-custom-hook-usescript-3hc8
