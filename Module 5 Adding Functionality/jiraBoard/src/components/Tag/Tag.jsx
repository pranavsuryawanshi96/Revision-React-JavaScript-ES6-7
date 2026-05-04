import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectedTag, selected }) => {
  const tagStyle = {
    DEV: { backgroundColor: "#04CAFF" },
    QA: { backgroundColor: "#ff2e04" },
    PO: { backgroundColor: "#04ff2a" },
  };
  const tagKeyMap = {
    DEV: "DEV",
    QA: "QA",
    "Product Owner": "PO",
  };
  const key = tagKeyMap[tagName];
  return (
    <>
      <button
        type="button"
        style={selected ? tagStyle[key] : {}}
        className="tag"
        // getting tag name form TableForm.jsx file dropdown
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
