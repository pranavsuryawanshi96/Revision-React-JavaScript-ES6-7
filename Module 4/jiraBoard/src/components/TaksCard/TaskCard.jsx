import React from "react";
import "./TaskCard.css";
import Tag from "../Tag/Tag";
import deleteIcon from "../../assets/delete_3625005.png";
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is sample Text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
