import React, { useState, useEffect } from "react";
import "./statewise.js";
import Loader from "./Loader";

const Statewise = () => {
  //for calling map method we used useState hook
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  //------------------------------------------------
  const getCovidData = async () => {
    setloading(true);
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    setloading(false);
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  //for fetching api we need to use useEffect hook
  useEffect(() => {
    getCovidData();
  }, []);
  //----------------------------------------------------------
  if (loading) {
    return (
      <main>
        <h1 className="h1loading">Loading Please Wait</h1>
        <Loader />
      </main>
    );
  }
  //---------------------------------------------------------
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="fw-bold"> INDIA </span> COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark bg-dark text-white">
              <tr>
                <th>State</th>
                <th>confirmed</th>
                <th>recovered</th>
                <th>deaths</th>
                <th>active</th>
                <th>updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
