// LocationUser.jsx for #60.useLocationHook.
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const LocationUser = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h2>
        User {fname}, {lname} page
      </h2>
      <p>My current Location is {location.pathname}</p>
      {location.pathname === `/locationuser/shubham/pandkar` ? (
        <button onClick={() => alert(`you are awesome`)}> click me</button>
      ) : null}
    </>
  );
};

export default LocationUser;
