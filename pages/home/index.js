import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/user";
import { FacebookPost } from "../../components/facebookPost/index";
import { Auth } from "../../components/auth";

const Home = () => {
  const user = useRecoilValue(userState);

  return <Auth> Hey {user.email}
    <FacebookPost/> 
  </Auth>;

};

export default Home;
