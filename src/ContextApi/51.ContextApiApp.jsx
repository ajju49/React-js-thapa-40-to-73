//@@@@@@@@@@@@@ # 51. Context Api in react js @@@@@@@@@@@
//React hooks provides a concept call Context.

//React Context API allows you to easily access data at different levels of th component tree,
// without passing prop to every level.

import React, { createContext } from "react";
import CompA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();

const ContextApiApp = () => {
  return (
    <>
      <FirstName.Provider value={"Shubham "}>
        <LastName.Provider value={"Pandkar"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextApiApp;
export { FirstName, LastName };
