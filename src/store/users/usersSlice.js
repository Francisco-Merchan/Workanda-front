import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",

  initialState: {
    isLoading: false,
    users: [],
    activeUser: null,
  },

  reducers: {
    onLoadUsers: (state) => {
      state.isLoading = !state.isLoading;
    },

    setUsers: (state, { payload = [] }) => {
      state.isLoading = false;
      state.users = payload;
    },

    clearActiveUser: (state) => {
      state.activeUser = null;
    },

    onSetActiveUser: (state, { payload }) => {
      state.activeUser = payload;
    },

    onDeleteUser: (state, { payload }) => {
      state.isLoading = false;
      state.users = state.users.filter((user) => user.id !== payload);
    },

    onUpdateUser: (state, { payload }) => {
      state.isLoading = false;
      state.activeUser = null;
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );
    },
  },
});

export const {
  onLoadUsers,
  setUsers,
  clearActiveUser,
  onSetActiveUser,
  onUpdateUser,
  onDeleteUser,
} = usersSlice.actions;
