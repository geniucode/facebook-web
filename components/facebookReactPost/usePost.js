import { useState } from "react";
import { useRecoilState } from "recoil";
import { urlImageState } from "../../atoms/urlImage";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState("");

  const [url,setUrl]=useRecoilState(urlImageState)


  
  const handleUploadFile=(event)=>{
    setFile(event.target.files[0]);
  }
 
const onSelectImg=async()=>{
 
    const response= await postWithImageAxios("upload",{
      file:file
    })
    setUrl(response.url)
    console.log(url)
  
}
if(file){
  onSelectImg()
}

  const onChangePost = (event) => {
    setPostBody(event.target.value);
  };
  const onClickAddPost = async () => {
    let msg = null;
    try {
      let res = await postAxios("facebook-post/add-post", {
        postBody: postBody,
        postImg: url,
      });

      if (res) {
        msg = "Post Added Successfully";
      }
    } catch (error) {
      const errors = error.response?.data?.errors?.map((error) => error.param);
      if (errors) {
        msg = `${errors}`;
        console.log(errors);
        if (errors.includes("postBody")) {
          setPostBody({ value: "", accepted: false });
        }
        if (errors.includes("postImg")) {
          setPostImg({ value: "", accepted: false });
        }
      }
    }
    setSnackMsg(msg);
  };
  return {
    
    onChangePost,
    onClickAddPost,
    snackMsg,
    setSnackMsg,
    handleUploadFile
  };
};

export { usePost };
