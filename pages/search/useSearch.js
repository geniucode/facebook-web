import { useState } from "react";
import { getAxios } from "../../src/service/axios";

const useSearch = () => {
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const onChangeSearchValue = async (e) => {
    setGender(e.target.value);
    setError("");
    setUsers([]);
  };

  const onClickSearch = async () => {
    if (gender) {
      const response = await getAxios("user/search", {
        gender,
      });
      if (response?.errors) {
        setError("Please enter a valid email address");
        return;
      }
      if (!response?.success) {
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
  };
};
export { useSearch };
