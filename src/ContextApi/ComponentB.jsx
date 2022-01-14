import React, { useContext } from "react";
import CompC from "./ComponentC";
import { FirstName, LastName } from "./51.ContextApiApp";

// @@@@@@@@@@@@ 52. UseContext @@@@@@@@@@@@@@@@@@@
//to avoid multiple line code of consumer of ContextApi in ComponentC file we used useContext
const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};
export default CompB;
