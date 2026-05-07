import React from "react";
import "./TaskCard.css";
import Tag from "../Tag/Tag";
import deleteIcon from "../../assets/delete_3625005.png";
const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {

  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => {
        setActiveCard(index);
      }}
      //  when we pick the card then will get the position of card
      onDragEnd={() => {
        setActiveCard(null);
      }}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tags, index) => (
            <Tag tagName={tags} key={index} selected />
          ))}
        </div>
        <div
          className="task_delete"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            src={deleteIcon}
            alt=""
            className="delete_icon"
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
