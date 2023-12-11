import React from "react";

const AuthLayout = ({ children, title = "" }) => {
  return (
    <section className="layout-auth-section">
      <article className="layout-auth-form-container animate__animated animate__fadeIn">
        <h2 className="layout-auth-title">{title}</h2>
        {children}
      </article>
    </section>
  );
};

export default AuthLayout;
