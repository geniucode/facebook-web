import { useState } from "react";
import { friendsList } from "./data.js";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchValue = async (e) => {
    const finalSearchValue = e.target.value;
    setSearchValue(finalSearchValue);
  };

  const onClickSearch = async () => {
    if (searchValue) {
      const foundFriendsList = friendsList.filter((friend) =>
        friend.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (foundFriendsList.length === 0) {
        console.log("no friends found with this name");
      } else {
        console.log(foundFriendsList);
      }
    } else {
      console.log("Please enter a name to search for");
    }
  };
  return {
    onChangeSearchValue,
    onClickSearch,
  };
};
export { useSearch };
