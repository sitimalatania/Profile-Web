import React, { useEffect } from "react";

const MovingGradientBackground = ({ children }) => {
  useEffect(() => {
    const moveGradient = () => {
      const gradient = document.querySelector(".moving-gradient");
      if (gradient) {
        let x = 0;
        setInterval(() => {
          x++;
          gradient.style.backgroundPositionX = x + "px";
        }, 10);
      }
    };
    moveGradient();
  }, []);

  return <div className="moving-gradient">{children}</div>;
};

export default MovingGradientBackground;
