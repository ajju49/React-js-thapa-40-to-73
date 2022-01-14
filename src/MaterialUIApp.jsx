//#43   #44. .How to import Material-Ui icon in react js
import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const MaterialUIApp = () => {
  const [num, setNum] = useState(0);

  const incrementNum = () => {
    setNum(num + 1);
  };

  const decrementNum = () => {
    if (num === 0) {
      alert("below 0 decrement is not possible");
    } else {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="div-main">
        <div className="div-center">
          <h1>{num}</h1>
          <br />
          <div className="button-div">
            <Tooltip title="Delete">
              {/* material ui custom Button  1st letter is capital */}
              <Button className="decrement" onClick={decrementNum}>
                <IndeterminateCheckBoxIcon />
              </Button>
            </Tooltip>
            {/* tool tip will display the name */}
            <Tooltip title="Addition">
              <Button className="increment" onClick={incrementNum}>
                <AddCircleOutlineIcon />
              </Button>
              {/* normal html button starts with small letter */}
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaterialUIApp;
