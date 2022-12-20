import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
let postsInformation=[];
//let postsCreationTime=[];
const useHome=()=>{
    const user = useRecoilValue(userState);
    const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
    
    const getAxiosGetAllPosts=async()=>{
      const response =await getAxios("facebook-post/get-all-posts", {});
      //console.log(response.posts)
       postsInformation=await response.posts.map((item)=>{ return [{userName:item.user.name},{postBody:item.postBody},
            {postTime:item.createdAt}]})
       // postsCreationTime=response.posts.map((item)=>{ return[{postTime:item.createdAt}]})
      //console.log(postsInformation)
      //console.log(postsInformation[0][2].postTime)
     }
    return{
        setHomeIcon,
        getAxiosGetAllPosts,
    };

}
export {useHome,postsInformation}