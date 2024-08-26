import { useCreateNewGroupChatMutation } from 'features/apiSlice.js';
import { getUsername } from 'utils/globalUtils.js';

function useNewGroupChat(closeModal) {
  const [triggerNewGroupChat] = useCreateNewGroupChatMutation();
  return async (targetUsernames, groupName) => {
    try {
      const username = getUsername();
      await triggerNewGroupChat({ fromUsername: username, targetUsernames, conversationName: groupName }).unwrap();
      closeModal();
    } catch (error) {
      console.error('Failed to create a new chat:', error);
    }
  };
}
export default useNewGroupChat;
