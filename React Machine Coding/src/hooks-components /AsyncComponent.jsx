import { useAsync } from "../hooks/useAsync";

const AsyncComponent = () => {
  const callbackFun = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const fakePromise = () => {
    return new Promise((resolve, reject) => {
      setTimout(() => {
        const randomNumber = Math.random() * 10;
        if (randomNumber < 5) {
          resolve("Promise resolved");
        } else {
          reject("Promise rejected");
        }
      }, 1000);
    });
  };

  const { data, isLoading, error } = useAsync(callbackFun);
  // const { data, isLoading, error } = useAsync(fakePromise);

  if (isLoading) return <div>loading ...</div>;
  if (error) return <div>{error}</div>;

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default AsyncComponent;
