import { fetchUsers } from "Actions/userActions.js";
import { useState } from "react";

function useSearchUsers() {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  async function searchUsers(prefix) {
    const trimmedPrefix = prefix.trim();
    if (trimmedPrefix) {
      return fetchUsers(trimmedPrefix, { setLoader }).then((res) => {
        setSearchedUsers(res?.data?.users || []);
        return res?.data || {};
      });
    }
  }
  return { searchedUsers, searchUsers, loader };
}

export default useSearchUsers;
