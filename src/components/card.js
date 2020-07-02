import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="list-item">{props.item.email}</div>
      <div className="list-item">{props.item.mobile}</div>
      <button
        className="negative-btn"
        onClick={() => props.removeItem(props.item.email)}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
