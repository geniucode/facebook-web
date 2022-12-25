import { postsInformationState } from "../../atoms/postsInformation";
import { useRecoilState } from "recoil";
import { FacebookPostComp } from "./post";



const FacebookPost = () => {
  const [postsInformation,setPostsInformation]=useRecoilState(postsInformationState)
  return (
   <>
   {postsInformation?.map((item)=>{
    return(
     <FacebookPostComp postData={item}/>
   )})}
   </>
  );
};
export { FacebookPost };
