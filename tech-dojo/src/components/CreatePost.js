import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./CreatePost.css";

const CreatePost = ({ closeModal }) => {
  const [postText, setPostText] = useState("");

  const handlePostSubmit = async () => {
    if (!postText.trim()) return;

    await addDoc(collection(db, "discussionPosts"), {
      text: postText,
      user: auth.currentUser?.displayName || "Anonymous",
      likes: 0,
      comments: [],
      timestamp: serverTimestamp(),
    });

    setPostText("");
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create a Post</h2>
        <textarea
          placeholder="Write something..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default CreatePost;
