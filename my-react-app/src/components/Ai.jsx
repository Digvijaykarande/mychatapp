import React, { useState } from "react";
import "../stylesheets/Ai.css";

function Ai() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [display, setDisplayResult] = useState("");

  const API_KEY = "AIzaSyD4x9FqziSV6gaXy2haP1TWNCaVYZuf5IE";
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const formatResponse = (text) => {
    const paragraphs = text.split(/\n\s*\n/).map((para, index) => <p key={index}>{para}</p>);
    return paragraphs;
  };

  const generate = async () => {
    if (!input.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: input }
    ]);

    setDisplayResult("Loading...");

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";

      
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: aiResponse },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: `Error: ${error.message}` },
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      generate();
    }
  };

  return (
    <div className="aichatroom">
      <div className="display-result">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type}`}
          >
            <h4>{message.text}</h4>
          </div>
        ))}
      </div>

      <div className="input-div">
        <input
          type="text"
          placeholder="Ask anything"
          className="aiinput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="generate-btn" onClick={generate} disabled={!input.trim()}>
          send
        </button>
      </div>
    </div>
  );
}

export default Ai;
