import { useResponsive } from "../hooks/useResponsive";

const CheckApplicationResponsive = () => {
  const { isDesktop, isMobile, isTablet } = useResponsive();

  return (
    <div>
      <p>
        {isDesktop && "Desktop"}
        {isTablet && "Tablet"}
        {isMobile && "Mobile"}
      </p>
    </div>
  );
};

export default CheckApplicationResponsive;
