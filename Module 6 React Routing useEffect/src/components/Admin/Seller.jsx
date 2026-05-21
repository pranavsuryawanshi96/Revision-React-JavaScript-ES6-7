import React, { useEffect, useState } from "react";

const Seller = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Component Mount.!!");
  }, []);
  return (
    <div>
      <h3>Admin Seller Page</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Seller;
