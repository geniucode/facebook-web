import { useState } from "react";
import { getAxios } from "../../service/axios";

const useSearch = () => {
  const [name, setname] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const onChangeSearchValue = async (e) => {
    console.log(e.target.value);
    setname(e.target.value);
    setError("");
    setUsers([]);
  };
  const onClickAddFriend = async () => {
    console.log("test");
    
  }
  const onClickSearch = async () => {
    if (name) {
      const response = await getAxios("user/search", {
        name,
      });
      if (response?.errors) {
        setError("Please enter a valid name");
        return;
      }
      if (!response?.success) {
        console.log(response);
        setError("No users found");
        setUsers([]);
      }
      if (response?.success) {
        setUsers(response.usersFound);
        console.log(response.usersFound);
        setError("");
      }
    } else {
      setError("Please enter a value to search for");
    }
  };
  return {
    error,
    users,
    onChangeSearchValue,
    onClickSearch,
    onClickAddFriend,
  };
};
export { useSearch };
