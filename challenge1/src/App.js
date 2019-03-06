import React, { Component } from "react";

import Header from "../src/components/header/Header";
import Post from "../src/components/postes/Post";

import "./styles.css";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Gabriel Petrovick",
        avatar: "https://avatars0.githubusercontent.com/u/6144263?v=4",
        time: "há 3 min",
        body:
          "Nullam condimentum a nunc gravida ullamcorper. Suspendisse finibus ligula placerat tortor vestibulum mollis. Proin hendrerit justo justo, sed suscipit risus tincidunt at."
      },
      {
        id: 2,
        name: "Lorranne Siqueira",
        avatar: "https://avatars1.githubusercontent.com/u/8729593?v=4",
        time: "há 30 min",
        body:
          "Morbi a eleifend massa, vel rutrum mauris. Maecenas vitae ante ultrices, feugiat ligula non, commodo lorem. Cras sed hendrerit magna, nec fringilla mauris. Sed consequat tincidunt dui sodales hendrerit."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
