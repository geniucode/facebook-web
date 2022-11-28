import { userState } from "../../atoms/user.js";
import { useRecoilState } from 'recoil'
const useHomePageMenu=()=>{
    const [user,setUser]=useRecoilState(userState);
    return{
        user,
        setUser
    };

};
export {useHomePageMenu}