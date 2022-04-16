import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Post({ userName, userPhoto, caption, postImage }) {
  const [like, setLike] = useState(true);
  return (
    <main className="container">
      <div className="top-container">
        <div className="user-info">
          <img className="user-photo" src={userPhoto} alt="User Photo" />
          <div className="time-name-container">
            <h1 className="user-name">{userName}</h1>
            <span className="post-timer">5 m </span>
          </div>
        </div>
        <div className="dot-icon-container">
          <BsThreeDotsVertical style={{ cursor: "pointer" }} size={20} />
        </div>
      </div>
      <div className="caption-container">
        <p className="caption">{caption}</p>
      </div>
      <div className="post-image-container">
        <img className="post-image" src={postImage} alt="Post Image" />
      </div>
      <div className="footer">
        <div className="footer-flex">
          <button onClick={() => setLike(liked => !liked)}>
            <div>
              {like ? (
                <FaRegHeart className="notLiked" />
              ) : (
                <FaHeart className="liked" />
              )}
            </div>
          </button>
          <p>Comments</p>
        </div>
        <p>share</p>
      </div>
    </main>
  );
}

export default Post;
