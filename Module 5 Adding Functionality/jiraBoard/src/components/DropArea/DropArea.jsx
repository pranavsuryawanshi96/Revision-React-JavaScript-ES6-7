import React, { useState } from "react";
import "./DropArea.css";
function DropArea({ onDrop }) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "drop-area" : "hide_drop"}
      onDrag={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Area Here
    </section>
  );
}

export default DropArea;
