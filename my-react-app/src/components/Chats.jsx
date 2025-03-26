import React, { useContext, useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContex";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Chats.css";

const Chats = () => {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [userChats, setUserChats] = useState({});
  const { dispatch } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserUID = currentUser?.uid;

  const [isAiChat, setIsAiChat] = useState(false); // New state for AI Chat

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      setUsersList(users);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUserUID) return;

    const userChatsRef = doc(db, "userChats", currentUserUID);
    const unsubscribe = onSnapshot(userChatsRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setUserChats(docSnapshot.data());
      }
    });
    return () => unsubscribe();
  }, [currentUserUID]);

  const handleSelectUser = (user) => {
    setIsAiChat(false); // Reset AI chat selection
    dispatch({ type: "CHANGE_USER", payload: user });

    if (window.innerWidth <= 768) {
      navigate(`/chat/${user.uid}`);
    }
  };

  const handleSelectAiChat = () => {
    dispatch({ type: "TOGGLE_AI_CHAT" }); // Set AI chat state in ChatContext
  
    if (window.innerWidth <= 768) {
      navigate(`/chat/ai`);
    }
  };
  
  if (!currentUserUID) {
    return <p>Loading chats...</p>;
  }

  return (
    <div className="chatsdiv">
      {/* AI Chat Section */}
      <div className="aidiv" onClick={handleSelectAiChat}>
        
        <h4>OpenChat AI</h4>
        <img
          src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg"
          className="aiimg"
          alt="AI Bot"
        />
      </div>

      {/* Users List */}
      {usersList.map((user) => (
        <div
          className="userdiv"
          key={user.uid}
          onClick={() => handleSelectUser(user)}
        >
          <div className="userLatter">{user.displayName.charAt(0)}</div>
          <div style={{ width: "90%", marginLeft: "6px" }}>
            <div className="namestatus">
              <h4 className="usernameh3">{user.displayName}</h4>
              <span style={{ color: "#25d366" }}>{user.status}</span>
            </div>
            <p className="lastMessage">
              {userChats.lastMessage?.text || "Start a new conversation"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
