import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios";

const useSearch = () => {
  const [user, setUser] = useRecoilState(userState);

  const onClickAddFriend = async (id) => {
    const receiverId = id;
    const senderId = user._id;
    const response = await postAxios("friendRequest", {
      senderID: senderId,
      receiverID: receiverId,
    });
    console.log("response", response);
  };

  return {
    onClickAddFriend,
  };
};
export { useSearch };
