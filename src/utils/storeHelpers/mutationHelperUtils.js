import { getUsername } from "../globalUtils.js";

export const addChatToList = async (payload, { dispatch, queryFulfilled }, updateQueryData) => {
  try {
    const { data: newChat } = await queryFulfilled;
    dispatch(
      updateQueryData("getAllChats", getUsername(), (draft) => ({
        ...draft,
        newChat,
      }))
    );
  } catch (e) {
    console.error(e);
  }
};
