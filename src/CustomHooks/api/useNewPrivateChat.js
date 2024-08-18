import { useCreateNewPrivateChatMutation } from "features/apiSlice.js";
import { getUsername } from "utils/globalUtils.js";

function useNewPrivateChat(closeModal) {
  const [triggerNewChat] = useCreateNewPrivateChatMutation();
  return async (targetUsername) => {
    try {
      const username = getUsername();
      await triggerNewChat({ fromUsername: username, targetUsername }).unwrap();
      closeModal();
    } catch (error) {
      console.error("Failed to create a new chat:", error);
    }
  };
}
export default useNewPrivateChat;
