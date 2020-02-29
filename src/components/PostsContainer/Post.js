// You will add code in this file

import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // console.log(props.post);
  // set up state for the likes
  console.log('post props.username', props.data.username)
  console.log('post props', props) 

  return (
    <div className="post-border">
      <PostHeader
        username={props.data.username}
        thumbnailUrl={
          props.data.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      <LikeSection data={props.data.likes} />
      <CommentSection
        postId={props.data.imageUrl}
        comments={props.data.comments}
      />
    </div>
  );
};

export default Post;