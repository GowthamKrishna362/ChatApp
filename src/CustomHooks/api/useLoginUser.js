import { useAuth } from "Contexts/AuthContext.js";
import { useCallback } from "react";
import { loginUser } from "Actions/userActions.js";

function useLoginUser() {
  const { login } = useAuth();
  return useCallback(
    async function onLogin(username, password) {
      async () => {
        try {
          const res = await loginUser(username, password);
          login(username);
          return res;
        } catch (e) {
          return e;
        }
      };
    },
    [login]
  );
}

export default useLoginUser;
