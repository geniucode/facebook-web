import { useState } from "react";
import storage from "../../service/firebaseConfig.js";
import { ref, uploadBytes , getDownloadURL } from "firebase/storage";
function uploadImg() {
  const [file, setFile] = useState("");

  // Handles input change event and updates state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file).then(() => {
      setFile('');
    
    getDownloadURL(storageRef).then(async (url) => {
      try {
        console.log(url);
        
      } catch (error) {
        console.log(error);
      }
    })
  })

  }
  return (
    <div>
      <input type="file" onChange={handleChange} accept="" />
      <button onClick={handleUpload}>Upload to Firebase</button>
    </div>
  );
}

export default uploadImg;
