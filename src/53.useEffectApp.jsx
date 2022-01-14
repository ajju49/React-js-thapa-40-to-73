import React, { useState, useEffect } from "react";

const UseEffectApp = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  //useEffect => ak kam hone ke bad agar dusra kam karna hain to useEffect use karte hain
  //dom render hone ke bad agar kuch karna hain to useEffect use hota hain
  //useEffect always expect a function.
  useEffect(() => {
    alert("You have clicked");
    console.log("you have clicked");
  }, [num]);
  //[] means 1st time jab page render hoga to hi yah alert dikhai dega uske bad nahi.
  //[num] means 1st wale button par click kane ke bad alert ho jayega

  return (
    <>
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </>
  );
};

export default UseEffectApp;
