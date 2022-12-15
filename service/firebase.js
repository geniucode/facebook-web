import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWsXDSwnOJ9E5w5DLdyfWktoiHYKaOkOU",
  authDomain: "uploadingfile-be3d5.firebaseapp.com",
  projectId: "uploadingfile-be3d5",
  storageBucket: "uploadingfile-be3d5.appspot.com",
  messagingSenderId: "274897164921",
  appId: "1:274897164921:web:f62cb50c96b78effa252a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
