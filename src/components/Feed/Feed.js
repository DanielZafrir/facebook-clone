import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import { db } from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, [posts]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(({ id, data }) => (
        <Post
          key={id}
          profilePic={data.profilePic}
          image={data.image}
          message={data.message}
          timestamp={data.timestamp}
          username={data.username}
        />
      ))}
    </div>
  );
};

export default Feed;
