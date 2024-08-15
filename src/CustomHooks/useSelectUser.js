import { useCallback, useState } from "react";

import useSearchUsers from "CustomHooks/api/useSearchUsers.js";
import useDebounce from "CustomHooks/useDebounce.js";
import { DEBOUNCE_INTERVAL } from "Constants/globalConstants.js";

export default function useSelectUser() {
  const [searchKey, setSearchKey] = useState("");

  const { searchUsers, searchedUsers, loader: searchedUsersLoader } = useSearchUsers();

  const debounceCallback = useCallback(() => searchUsers(searchKey), [searchUsers, searchKey]);
  useDebounce(searchKey, debounceCallback, DEBOUNCE_INTERVAL);

  const options = searchedUsers.map((user) => ({
    value: user.username,
    label: user.username,
  }));
  return {
    options,
    searchedUsersLoader,
    setSearchKey,
  };
}
