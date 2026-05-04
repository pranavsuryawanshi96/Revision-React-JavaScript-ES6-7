import React from "react";
import "./Tag.css";
import { tagStyle, tagKeyMap } from "../../constant/common";
const Tag = ({ tagName, selectedTag, selected }) => {
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
