import { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const onChangeSearchValue = async (e) => {
    const finalSearchValue = e.target.value;
    setSearchValue(finalSearchValue);
    setError("");
  };

  const onClickSearch = async () => {
    if (searchValue) {
      // const foundFriendsList = friendsList.filter((friend) =>
      //   friend.name.toLowerCase().includes(searchValue.toLowerCase())
      //     );
      //     if (foundFriendsList.length === 0) {
      //       console.log("no friends found with this name");
      //     } else {
      //       console.log(foundFriendsList);
      //     }
    } else {
      setError("Please enter a value to search for");
    }
  };
  return {
    error,
    onChangeSearchValue,
    onClickSearch,
  };
};
export { useSearch };
