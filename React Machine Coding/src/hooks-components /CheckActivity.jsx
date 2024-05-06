import { useIdle } from "../hooks/useIdle";

const CheckActivity = () => {
  const isIdle = useIdle(2000);

  return <div>{isIdle ? "Are you still there?" : "Hello there!"}</div>;
};

export default CheckActivity;
