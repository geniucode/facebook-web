// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAU7R5tDhDvpayYg2LsPt42vW6uV8i2MsM",
  authDomain: "facebook-f94cf.firebaseapp.com",
  projectId: "facebook-f94cf",
  storageBucket: "facebook-f94cf.appspot.com",
  messagingSenderId: "629504688895",
  appId: "1:629504688895:web:b51edc1128b27272dfc2ca",
};

// Initialize Firebase and cloud storage
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
