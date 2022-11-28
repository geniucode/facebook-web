import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/user";
import { Auth } from "../../components/auth";

const Home = () => {
  const user = useRecoilValue(userState);
  return <Auth> Hey {user.email}</Auth>;
};

export default Home;
