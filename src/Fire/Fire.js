import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAiJufxCJclvPDdRImk_gDr9xLL0XlhPKQ",
  authDomain: "unisi-iot-d39b8.firebaseapp.com",
  databaseURL: "https://unisi-iot-d39b8-default-rtdb.firebaseio.com",
  projectId: "unisi-iot-d39b8",
  storageBucket: "unisi-iot-d39b8.appspot.com",
  messagingSenderId: "4538494051",
  appId: "1:4538494051:web:63d9d6b972eefadbd5dc56",
  measurementId: "G-1Q22BXBFCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
