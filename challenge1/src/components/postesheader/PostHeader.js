import React from "react";
import "./styles.css";

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

export default PostHeader;
