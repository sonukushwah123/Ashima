import React from "react";

const Loader = () => {
  return (
    <div className="main-loader">
      <div
        className="loader position-relative d-flex align-item-center justify-content-center"
        style={{ height: "400px" }}
      >
        {" "}
        <div className="position-absolute">
          <span
            className="text-secondary text-center fw-bold  mb-0"
            style={{ fontSize: "150px" }}
          >
            404
          </span>
     
          <h2 className="text-secondary text-uppercase fw-bold">oops! page not found</h2>
          <p className="text-secondary ">
            Sorry, the page you're looking for doesn't exist. If you think
           <br/> something is broken, report a problem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
