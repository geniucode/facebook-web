import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { urlImageState } from "../../atoms/urlImage";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState("");
  const uploadRef=useRef();
  const [url,setUrl]=useRecoilState(urlImageState)

  


  
  const handleUploadFile=(event)=>{
    setFile(event.target.files[0]);
    console.log("file",file)
  }
 


  const onChangePost = (event) => {
    setPostBody(event.target.value);
  };
  const onClickAddPost = async () => {
    let msg = null;
    try {
      let src=""
      if(file){
        const response= await postWithImageAxios("upload",{
          file:file
        })
        setUrl(response.url)
        let srcURL=url.split('/')
        console.log("srcURL:",srcURL)
        src=srcURL.at(-3)+"/"+srcURL.at(-2)+"/"+srcURL.at(-1)
        
      }
     
      let res = await postAxios("facebook-post/add-post", {
        postBody: postBody,
        postImg: src,
      });
      console.log("src:",src)

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
    handleUploadFile,
    uploadRef
  };
};

export { usePost };
