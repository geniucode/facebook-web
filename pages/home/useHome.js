import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { userState } from "../../atoms/user";

const useHome=()=>{
    const user = useRecoilValue(userState);
    const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
    return{
        user,
        homeIcon,
        setHomeIcon
    };

}
export {useHome}