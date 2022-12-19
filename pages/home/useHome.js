import { useRecoilState, useRecoilValue } from "recoil";
import { postsState } from "../../atoms/posts";
import { homeIconState } from "../../atoms/home-icon";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";

const useHome=()=>{
    const user = useRecoilValue(userState);
    const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
    const [posts, setPosts] = useRecoilState(postsState);
    const getAxiosGetAllBooks=async()=>{
        const response =await getAxios("facebook-post/get-all-posts", {});
        setPosts(response.posts)
        console.log(response)
       }
    return{
        setHomeIcon,
        getAxiosGetAllBooks
    };

}
export {useHome}