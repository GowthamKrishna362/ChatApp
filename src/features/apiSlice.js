import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_CONSTANTS } from 'Constants/apiUrlConstants.js';
import { getChatDetailsMapFromApi } from 'utils/chatUtils.js';
import { getJwtToken } from 'utils/globalUtils.js';
import { addChatToList } from 'utils/storeHelpers/cacheUpdateUtils.js';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONSTANTS.API_BASE,
    prepareHeaders: (headers, { endpoint }) => {
      const token = getJwtToken();
      if (token && !endpoint.endsWith('addNewUser') && !endpoint.endsWith('loginUser')) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (payload) => ({
        url: API_CONSTANTS.ADD_NEW_USER,
        method: 'POST',
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: API_CONSTANTS.LOGIN_USER,
        method: 'POST',
        body: payload,
      }),
    }),
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
        method: 'POST',
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data: newChat } = await queryFulfilled;
          dispatch(addChatToList(newChat));
        } catch (e) {
          console.error(e);
        }
      },
    }),
    createNewGroupChat: builder.mutation({
      query: (payload) => ({
        url: API_CONSTANTS.ADD_NEW_GROUP_CHAT,
        method: 'POST',
        body: payload,
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data: newChat } = await queryFulfilled;
          dispatch(addChatToList(newChat));
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAddNewUserMutation,
  useGetAllChatsQuery,
  useGetConversationMessageDetailsQuery,
  useLazyGetUsersByPrefixQuery,
  useCreateNewPrivateChatMutation,
  useCreateNewGroupChatMutation,
} = apiSlice;

export const { updateQueryData, upsertQueryData } = apiSlice.util;
