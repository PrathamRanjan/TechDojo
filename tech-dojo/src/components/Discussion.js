import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, onSnapshot, doc, updateDoc, arrayUnion } from "firebase/firestore";
import Sidebar from "./Sidebar"; // ✅ Sidebar is now present
import "./Discussion.css";

const Discussion = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [commentInput, setCommentInput] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const createPost = async () => {
    if (!auth.currentUser) return;
    await addDoc(collection(db, "posts"), {
      user: auth.currentUser.displayName,
      content: newPost,
      likes: 0,
      comments: [],
    });
    setNewPost("");
  };

  const likePost = async (postId) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: arrayUnion(auth.currentUser.uid),
    });
  };

  const handleCommentChange = (postId, value) => {
    setCommentInput({ ...commentInput, [postId]: value });
  };

  const addComment = async (postId) => {
    if (!auth.currentUser || !commentInput[postId]) return;
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      comments: arrayUnion({ user: auth.currentUser.displayName, text: commentInput[postId] }),
    });
    setCommentInput({ ...commentInput, [postId]: "" });
  };

  return (
    <div className="discussion-layout">
      <Sidebar /> {/* ✅ Sidebar now appears on discussion page */}
      <div className="discussion-content">
        <h1>Discussion Page</h1>

        {/* 🆕 Create Post Section */}
        <div className="create-post-section">
          <input
            className="create-post-input"
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write a post..."
          />
          <button onClick={createPost} className="create-post-btn">+ Post</button>
        </div>

        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h3>{post.user}</h3>
              </div>
              <p className="post-content">{post.content}</p>

              {/* 🆕 Action Buttons */}
              <div className="action-buttons">
                <button onClick={() => likePost(post.id)}>❤️ {post.likes.length}</button>
              </div>

              {/* 🆕 Comment Section */}
              <div className="comment-section">
                <input
                  type="text"
                  value={commentInput[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  placeholder="Write a comment..."
                />
                <button onClick={() => addComment(post.id)}>Post</button>
              </div>

              {/* 🆕 Display Comments */}
              <div className="comments">
                {post.comments?.map((comment, index) => (
                  <div key={index} className="comment">
                    <strong>{comment.user}:</strong> {comment.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discussion;
