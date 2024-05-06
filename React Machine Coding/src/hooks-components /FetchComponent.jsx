import { useFetch } from "../hooks/useFetch";

const FetchComponent = () => {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) return <div>Data is loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default FetchComponent;
