import { useRecoilState } from 'recoil'
import { userState } from "../../atoms/user.js";
const useHomePageMenu=()=>{
    const [user,setUser]=useRecoilState(userState);
    return{
        user,
        setUser
    };

};
export {useHomePageMenu}