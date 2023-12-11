import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import ErrorMessage from "../components/ErrorMessage";
import { formLoginData, formLoginValidations } from "../helpers/formsData";

const LoginPage = () => {
  const {
    email,
    password,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(formLoginData, formLoginValidations);
  const [formSubmited, setFormSubmited] = useState(false);
  const { status, startLogin } = useAuthStore();

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    startLogin({ email, password });
  };

  return (
    <AuthLayout title="INGRESAR">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input-form"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={emailValid} />}

        <input
          className="input-form"
          id="inputPassword"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={passwordValid} />}

        <input
          className="button-submit"
          type="submit"
          value="INGRESAR"
          disabled={status === "checking"}
        />
        <span className="form-message">
          No tenes cuenta? <Link to="/auth/register">Registrate</Link>
        </span>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
