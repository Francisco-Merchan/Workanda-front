import React from "react";
import Navbar from "../components/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="main-app-page">{children}</section>
    </>
  );
};
