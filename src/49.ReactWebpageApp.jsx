import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const WebPageApp = () => {
  return (
    <>
      <h1 className="text-center text-danger text-capitalize mb-5 mt-5">
        Welcom to my channel
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/200/301"
                alt="Card image cap"
                height="250px"
                width="100px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/200/302"
                alt="Card image cap"
                height="250px"
                width="100px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://picsum.photos/200/303"
                alt="Card image cap"
                height="250px"
                width="100px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebPageApp;
