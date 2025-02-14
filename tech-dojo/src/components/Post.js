import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  // 🔹 Handle Like Button Click
  const handleLike = async () => {
    const postRef = doc(db, "discussionPosts", post.id);
    setLikes(likes + 1);
    await updateDoc(postRef, { likes: likes + 1 });
  };

  // 🔹 Handle Comment Submission
  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;
    const newComments = [...comments, { user: auth.currentUser?.displayName || "Anonymous", text: comment }];
    setComments(newComments);
    setComment("");
    const postRef = doc(db, "discussionPosts", post.id);
    await updateDoc(postRef, { comments: newComments });
  };

  return (
    <div className="post">
      <h3>{post.user}</h3>
      <p>{post.text}</p>
      
      <div className="post-actions">
        <button onClick={handleLike}>❤️ {likes}</button>
        <button onClick={() => setComment((prev) => !prev)}>💬 Comment</button>
      </div>

      {/* Comment Section */}
      {typeof comment === "string" && (
        <div className="comment-section">
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Post</button>
        </div>
      )}

      {/* Display Comments */}
      <div className="comments">
        {comments.map((c, index) => (
          <p key={index}><strong>{c.user}:</strong> {c.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
