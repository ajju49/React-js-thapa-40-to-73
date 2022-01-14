import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Bootstrap5App = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Welcome</h1>
        <br />
        <div className="card" style={{ width: "25rem" }}>
          <img
            src="https://picsum.photos/seed/picsum/150/100"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://youtu.be/NvmkaX5PTDE"
              className="btn btn-outline-success"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Bootstrap5App;
