import { addNewUser } from "Actions/userActions.js";
import { useAuth } from "Contexts/AuthContext.js";
import { useCallback } from "react";

function useNewUser() {
  const { login } = useAuth();
  return useCallback(
    async function onNewUser(username, password, name) {
      try {
        const res = await addNewUser({ username, password, name });
        login(username);
        return res;
      } catch (e) {
        return e;
      }
    },
    [login]
  );
}

export default useNewUser;
