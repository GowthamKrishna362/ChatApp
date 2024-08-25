import { useAuth } from "Contexts/AuthContext.js";
import { loginUser } from "Actions/userActions.js";

function useLoginUser() {
  const { login } = useAuth();
  return async function onLogin(username, password) {
    try {
      const res = await loginUser(username, password);
      login(username, res.data.token);
      return res;
    } catch (e) {
      return e;
    }
  };
}

export default useLoginUser;
