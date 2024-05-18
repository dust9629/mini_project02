import React from "react";

const Greeting = () => {
  const handleClick = () => {
    alert("hello");
  };
  return <button onClick={handleClick}> Click</button>;
};

export default Greeting;
