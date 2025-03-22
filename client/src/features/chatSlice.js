import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  selectedChatId: null,
  chatDetailsMap: {},
  isVideoChatOpen: false,
  videoChatDetails: {},
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedChatId: (state, { payload }) => {
      state.selectedChatId = payload;
    },
  },
});

export const { setSelectedChatId, setIsVideoChatOpen } = chatSlice.actions;
