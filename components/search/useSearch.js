import { useRecoilState } from "recoil";
import { useState } from "react";
import { getAxios } from "../../service/axios";
import { searchUsersState } from "../../atoms/users";

const useSearch = () => {
  const [error, setError] = useState();
  const [users, setUsers] = useRecoilState(searchUsersState);

  const showSearchResults = () => {
    if (users?.length > 0) {
      console.log("dsalkhdlksahdlksa");
      users?.map((user) => {
        return `
          <div className={styles.userSearchedFor}>
            <span className={styles.usersImage}></span>
            <span>{user.name}</span>
          </div> `;
      });
    }
    if (users[0]?.value === "notFound") {
      return "<div>No users Found</div>";
    }
  };

  const onClickSearch = async (searchValue) => {
    const notFound = ["notFound"];
    if (searchValue.length > 0) {
      const response = await getAxios(`user/search?name=${searchValue}`, {});
      if (response?.errors) {
        setError("Please enter a valid name");
        console.log(error);
        return error;
      }
      if (!response?.success) {
        console.log("response is", response);
        setError("No users found");
        console.log(error);
        setUsers(notFound);
      }
      if (response?.success) {
        setUsers(response.usersFound);
        setError("");
        console.log(response);
      }
    } else {
      setError("Please enter a value to search for");
      setUsers();
    }
  };
  return {
    users,
    onClickSearch,
    showSearchResults,
  };
};

export { useSearch };
