import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONSTANTS } from "Constants/apiUrlConstants.js";
import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";
import { getChatDetailsMapFromApi } from "utils/chatUtils.js";
import { addChatToList } from "utils/storeHelpers/mutationHelperUtils.js";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONSTANTS.API_BASE,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem(SESSION_STORAGE_KEYS.JWT_TOKEN);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllChats: builder.query({
      query: (username) => API_CONSTANTS.GET_ALL_CONVERSATIONS(username),
      transformResponse: getChatDetailsMapFromApi,
    }),
    getConversationMessageDetails: builder.query({
      query: (chatId) => API_CONSTANTS.GET_CONVERSATION_MESSAGE_DETAILS(chatId),
    }),
    getUsersByPrefix: builder.query({
      query: (prefix) => API_CONSTANTS.SEARCH_USERS_BY_PREFIX(prefix),
      transformResponse: (response) => response.users,
    }),
    createNewPrivateChat: builder.mutation({
      query: (targetUsername) => ({
        url: API_CONSTANTS.ADD_NEW_PRIVATE_CHAT(targetUsername),
        method: "POST",
      }),
      onQueryStarted: (...args) => addChatToList(...args, apiSlice.util.updateQueryData),
    }),
    createNewGroupChat: builder.mutation({
      query: (payload) => ({
        url: API_CONSTANTS.ADD_NEW_GROUP_CHAT,
        method: "POST",
        body: payload,
      }),
      onQueryStarted: (...args) => addChatToList(...args, apiSlice.util.updateQueryData),
    }),
  }),
});

export function addMessageToChat(chatId, message) {
  apiSlice.util.updateQueryData("getConversationMessageDetails", chatId, (draft) => {
    draft.push({ ...message, isTransient: true });
    return draft;
  });
}

export const {
  useGetAllChatsQuery,
  useGetConversationMessageDetailsQuery,
  useLazyGetUsersByPrefixQuery,
  useCreateNewPrivateChatMutation,
  useCreateNewGroupChatMutation,
} = apiSlice;

export const { updateQueryData, upsertQueryData } = apiSlice.util;
