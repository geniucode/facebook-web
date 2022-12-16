import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAzoMcS4MOVd5J8cOll1n39eJJZHvJLR20",
    authDoain: "fir-upload-d2d91.firebaseapp.com",
    projectId: "fir-upload-d2d91",
    storageBucket: "fir-upload-d2d91.appspot.com",
    messagingSenderId: "283030066100",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;