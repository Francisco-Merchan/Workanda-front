import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <small className="error-input-message animate__animated animate__headShake">
      {message}
    </small>
  );
};

export default ErrorMessage;
