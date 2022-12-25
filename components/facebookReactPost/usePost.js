import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { postButtonState, urlImageState } from "../../atoms/urlImage";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState("");
  const uploadRef=useRef();
  const[url,setUrl]=useState("")
  const [button,setButton]=useRecoilState(postButtonState)
  const [postField,setPostField]=useState("")


  
  const handleUploadFile=(event)=>{
    setFile(event.target.files[0]);
    console.log("file",event.target.files[0])
  }
 


  const onChangePost = (event) => {
    const value = event.target.value
    setPostBody(value);
    setPostField(event.target.value);
  };

  const onClickAddPost = async () => {
    let msg = null;
    
    try {
      let url =""
      if(file){
        const response= await postWithImageAxios("upload",{
          file:file
        })
        url=response.url
      }
      let res = await postAxios("facebook-post/add-post", {
        postBody: postBody,
        postImg: url,
      });
      console.log("url:",url)

      if (res) {
        msg = "Post Added Successfully";
      }
      setButton(true)
      setPostField("")
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
    handleUploadFile,
    uploadRef,
    postField,
  };
};

export { usePost };
