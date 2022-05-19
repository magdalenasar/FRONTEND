import { useEffect, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMouseposition] = useState({
    x: 0,
    y: 0,
  });
  const handleMousePosition = (e) => {
    setMouseposition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);
  return [mousePosition.x, mousePosition.y];
}

export default useMousePosition;
