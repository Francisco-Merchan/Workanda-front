import React from "react";
import AppApi from "../api/AppApi";
import { useDispatch, useSelector } from "react-redux";
import {
  clearActiveUser,
  onDeleteUser,
  onLoadUsers,
  onSetActiveUser,
  onUpdateUser,
  setUsers,
} from "../store/users/usersSlice";
import toast from "react-hot-toast";
import { onLogout } from "../store/auth/authSlice";

export const useUsersStore = () => {
  const { isLoading, users, activeUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const startgetUsers = async () => {
    try {
      const { data } = await AppApi.get("/users");
      dispatch(setUsers(data.users));
    } catch ({ response: { data, status } }) {
      if (status === 401 || status === 500) dispatch(onLogout());
      toast.error(data.message);
    }
  };

  const startSaveUser = async (userValues) => {
    dispatch(onLoadUsers());
    try {
      if (userValues.id) {
        const { data } = await AppApi.put(
          `/users/${userValues.id}`,
          userValues
        );
        dispatch(onUpdateUser(data.user));
        toast.success(data.message);
        return true;
      }

      const {
        data: { message },
      } = await AppApi.post("/users", userValues);
      const { data } = await AppApi.get("/users");
      toast.success(message);
      dispatch(setUsers(data.users));
      return true;
    } catch ({ response: { data, status } }) {
      dispatch(onLoadUsers());
      if (status === 401 || status === 500) dispatch(onLogout());
      toast.error(data.message);
    }
  };

  const startSetActiveUser = (id) => {
    const user = users.find((user) => user.id === id);
    dispatch(onSetActiveUser(user));
  };

  const startClearActiveUser = () => {
    dispatch(clearActiveUser());
  };

  const startDeleteUser = async (id) => {
    dispatch(onLoadUsers());
    try {
      const { data } = await AppApi.delete(`/users/${id}`);
      dispatch(onDeleteUser(id));
      toast.success(data.message);
    } catch ({ response: { data, status } }) {
      dispatch(onLoadUsers());
      if (status === 401 || status === 500) dispatch(onLogout());
      toast.error(data.message);
    }
  };

  const startSearchUsers = async (value) => {
    const usersSearch = users.filter((user) => {
      for (const key of Object.keys(user)) {
        if (String(user[key]).toLowerCase().includes(value.toLowerCase())) {
          return user;
        }
      }
    });

    if (value === "") {
      return await startgetUsers();
    }

    dispatch(setUsers(usersSearch));
  };

  return {
    users,
    isLoading,
    activeUser,

    startgetUsers,
    startSaveUser,
    startSetActiveUser,
    startClearActiveUser,
    startDeleteUser,
    startSearchUsers,
  };
};
