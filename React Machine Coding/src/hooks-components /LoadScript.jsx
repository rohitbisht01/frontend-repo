import { useScript } from "../hooks/useScript";

const LoadScript = () => {
  const status = useScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  );

  console.log(status);

  return <div>{status}</div>;
};

export default LoadScript;
