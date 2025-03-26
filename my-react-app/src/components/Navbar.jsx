import React, { useContext } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { AuthContext } from "../contexts/AuthContext";
import "../stylesheets/Navbar.css";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, "users", user.uid),
          { status: "offline" },
          { merge: true } 
        );
      }
      await firebaseSignOut(auth);  
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className='userdiv1'>
  {currentUser?.displayName ? (
    <>
      <h3 className='userletter'>{currentUser.displayName.charAt(0)|| " "}</h3>
      <p>{currentUser.displayName}</p>
      <button onClick={handleSignOut} style={{marginLeft: "10px"}}>Sign Out</button>
    </>
  ) : (
    <p>Loading...</p> 
  )}
</div>

    </>
  );
}

export default Navbar; 