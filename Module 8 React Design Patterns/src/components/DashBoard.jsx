import React from "react";

const DashBoard = ({ name, hoc }) => {
  return (
    <div>
      <h2>
        Hello Dashboard,Welcome {name} ,{hoc}
      </h2>
    </div>
  );
};

export default DashBoard;
