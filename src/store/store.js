import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { usersSlice } from "./users/usersSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
