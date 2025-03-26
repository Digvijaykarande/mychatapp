import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsrCLN8-QU3I7NxtdWUYwmDtfZ6U7Oobg",
  authDomain: "mychatapp-e284e.firebaseapp.com",
  projectId: "mychatapp-e284e",
  storageBucket: "mychatapp-e284e.firebasestorage.app",
  messagingSenderId: "1083813073670",
  appId: "1:1083813073670:web:b872e586029be76c1f4487",
  measurementId: "G-L2S7VNLFXY"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();