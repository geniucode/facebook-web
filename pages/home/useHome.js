import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";

const useHome=()=>{
    const user = useRecoilValue(userState);
    const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
    const getAxiosGetAllBooks=async()=>{
        const response =await getAxios("facebook-post/get-all-posts", {});
        console.log(response)
       }
    return{
        user,
        homeIcon,
        setHomeIcon,
        getAxiosGetAllBooks
    };

}
export {useHome}