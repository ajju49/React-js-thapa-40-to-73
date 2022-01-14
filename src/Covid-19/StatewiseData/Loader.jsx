import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <Loader
        type="Plane"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;

//"Audio"
// |"BallTriangle"
// |"Bars"
// |"Circles"
// |"Grid"
// |"Hearts"
// |"Oval"
// |"Puff"
// |"Rings"
// |"TailSpin"
// |"ThreeDots"
// |"Watch"
// |"RevolvingDot"
// |"Triangle"
// |"Plane"
// |"MutatingDots"
// |"CradleLoader";
