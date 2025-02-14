import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const q = query(usersCollection, orderBy("lessonsCompleted", "desc"));
      const querySnapshot = await getDocs(q);

      setUsers(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Lessons Completed</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>#{index + 1}</td>
              <td>{user.displayName || "Anonymous"}</td>
              <td>{user.lessonsCompleted || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
