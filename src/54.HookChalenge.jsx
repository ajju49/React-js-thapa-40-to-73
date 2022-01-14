// #54 React Hook Challenge #7: Changing the Title value of Website on Button Click
import React, { useState, useEffect } from "react";

const HookChallenge = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert(`you have clicked ${num} times`);
    document.title = `you clicked ${num} times`;
  }, [num]);

  return (
    <button
      className="button"
      onClick={() => {
        setNum(num + 1);
      }}
    >
      Click me {num}
    </button>
  );
};

export default HookChallenge;
