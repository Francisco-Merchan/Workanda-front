import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import LoadingSpinner from "../components/LoadingSpinner";
import AppPage from "../pages/AppPage";
import { useUsersStore } from "../hooks/useUsersStore";
import AuthRoutes from "./AuthRoutes";

const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  const { isLoading } = useUsersStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking" || isLoading === true) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AppPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
