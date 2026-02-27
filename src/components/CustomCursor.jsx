import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(0, 243, 255, 0.12) 0%, rgba(0, 243, 255, 0) 50%)',
        transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default CustomCursor;
