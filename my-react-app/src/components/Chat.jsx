import React, { useContext, useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../contexts/ChatContex";
import { useLocation } from "react-router-dom";
import Ai from "./Ai"; 
import "../stylesheets/Chat.css";

const Chat = () => {
  const { data, dispatch } = useContext(ChatContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isChatRoute = location.pathname.startsWith("/chat");

  function backpage() {
    dispatch({ type: "CHANGE_USER", payload: null }); 
    navigate(`/`);
  }

  return (
    <div className={`chat ${isChatRoute ? "visible" : ""}`}>
      <div className="chatInfo">
        <button className="backbutton" onClick={backpage}>←</button>
        <span>{data.isAiChat ? "OpenChat AI" : data.user?.displayName || "Select a user to chat"}</span>
        <span style={{ color: "#29ff29", fontSize: "1rem" }}>
          {!data.isAiChat && data.user?.status}
        </span>
      </div>

      {data.isAiChat ? (
        <Ai /> // Render AI Chat when selected
      ) : data.chatId !== "null" ? (
        <>
          <Messages />
          <Input />
        </>
      ) : (
        <p style={{ padding: "20px" }}>No user selected.</p>
      )}
    </div>
  );
};

export default Chat;
