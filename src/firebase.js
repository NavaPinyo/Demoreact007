import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqeNj3G8RuBm1RyFxkTTxPewcui-Aqxaw",
  authDomain: "demoreact007.firebaseapp.com",
  projectId: "demoreact007",
  storageBucket: "demoreact007.appspot.com",
  messagingSenderId: "914705138076",
  appId: "1:914705138076:web:211b0e234649d452b88859"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);