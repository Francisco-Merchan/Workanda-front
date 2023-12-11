import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import AppApi from "../api/AppApi";
import toast from "react-hot-toast";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await AppApi.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch ({ response: { data } }) {
      dispatch(onLogout());
      toast.error(data.message);
    }
  };

  const startRegister = async ({ email, password, name, phone }) => {
    dispatch(onChecking());
    try {
      const { data } = await AppApi.post("/auth/new", {
        email,
        password,
        name,
        phone,
      });
      toast.success(data.message);
      dispatch(onLogout());
    } catch ({ response: { data } }) {
      dispatch(onLogout());
      toast.error(data.message);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await AppApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    status,
    user,
    errorMessage,

    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
