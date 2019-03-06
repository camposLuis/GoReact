import React from "react";
import PostHeader from "../postesheader/PostHeader";

import "./styles.css";

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.name}
      time={props.data.time}
    />
    <p>{props.data.body}</p>
  </div>
);

export default Post;
