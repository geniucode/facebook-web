import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios";

//remove it to  add friend hook

const useSearch = () => {
  const [user, setUser] = useRecoilState(userState);

  const onClickAddFriend = async (id) => {
    const receiverId = id;
    const senderId = user._id;
    const response = await postAxios("friend-request", {
      recipient: receiverId,
    });
    console.log("response", response);
    if (response.success) {
      console.log(response.success);
      // add snackbar
      // setError(response.message);
    } else {
      // add snackbar
      // setError(response.message);
      console.log(response.message);
    }
  };

  return {
    onClickAddFriend,
  };
};
export { useSearch };
