import React, { useState } from "react";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Search from "./Search";
import "../stylesheets/Sidebar.css";
import Ai from "./Ai";

function Sidebar() {
  return (
   <>
   <div className="sidebar-heading">
   <Navbar />
   {/* <Search /> */}
   
      <div className="sidebar">
        <Chats />
      </div>
    </div>
    </>
  );
}

export default Sidebar;
