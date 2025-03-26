import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContex";
import { db } from "../firebase";
import Message from "./Message";
import "../stylesheets/Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages || []); 
      }
    });

    return () => unSub();
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.length === 0 ? (
        <p>No messages yet. Start chatting!</p> 
      ) : (
        messages.map((m) => <Message message={m} key={m.id} />)
      )}
    </div>
  );
};

export default Messages;
