import React from "react";
import { FirstName, LastName } from "./51.ContextApiApp";

const CompC = () => {
  return (
    <FirstName.Consumer>
      {(fname) => {
        //consumer always expects a callback function. usko ham directly
        // component main nahi likh sakte.hame function likh ke return main likhna padega
        //fname is parameter passed to access the value from provider
        return (
          <LastName.Consumer>
            {(lname) => {
              return (
                <h1>
                  My name is {fname} {lname}
                </h1>
              );
            }}
          </LastName.Consumer>
        );
      }}
    </FirstName.Consumer>
  );
};
export default CompC;
