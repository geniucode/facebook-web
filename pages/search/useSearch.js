import { useState } from "react";
import { friendsList } from "./data.js";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchValue = async (e) => {
    const finalSearchValue = e.target.value;
    setSearchValue(finalSearchValue);
  };

  const onClickSearch = async () => {
    console.log(searchValue);
    const foundFriendsList = friendsList.filter((friend) =>
      friend.name.includes(searchValue)
    );
    console.log(foundFriendsList);
  };
  return {
    onChangeSearchValue,
    onClickSearch,
  };
};
export { useSearch };
