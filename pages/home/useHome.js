import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { postsInformationState } from "../../atoms/postsInformation";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { timeByMoment } from "../../service/timeByMoment";
let postsInformation=[];
//let postsCreationTime=[];
const useHome=()=>{
    const user = useRecoilValue(userState);
    const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
    const [postsInformation,setPostsInformation]=useRecoilState(postsInformationState)
    // const fun=(b)=>{
    //     return b;
    // }

    const getAxiosGetAllPosts=async()=>{
      const response =await getAxios("facebook-post/get-all-posts", {});
      //console.log(response.posts)
       const postsInformationFromDB=await response.posts.map((item)=>{ return [{userName:item.user.name},{postBody:item.postBody},
        {timeByMoment:timeByMoment(item.createdAt)}, {postTime:item.createdAt} ]})
            // ,{tt:timeByMoment(999)}
            // ,{aliname:fun(7)}
            setPostsInformation(postsInformationFromDB)
       // postsCreationTime=response.posts.map((item)=>{ return[{postTime:item.createdAt}]})
      
      //console.log(postsInformation[0][2].postTime)
     }
    return{
        setHomeIcon,
        getAxiosGetAllPosts,
    };

}
export {useHome}