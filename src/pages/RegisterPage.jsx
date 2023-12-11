import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";
import ErrorMessage from "../components/ErrorMessage";
import {
  formRegisterValidations,
  fromRegisterData,
} from "../helpers/formsData";

const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    phone,
    nameValid,
    emailValid,
    passwordValid,
    password2Valid,
    phoneValid,
    onInputChange,
    isFormValid,
  } = useForm(fromRegisterData, formRegisterValidations);
  const { startRegister } = useAuthStore();
  const [formSubmited, setFormSubmited] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    startRegister({ name, email, password, phone });
  };

  return (
    <AuthLayout title="REGISTRO">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input-form"
          id="name"
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={nameValid} />}

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
          id="password"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={passwordValid} />}

        <input
          className="input-form"
          id="password2"
          type="password"
          placeholder="Repita la contraseña"
          name="password2"
          value={password2}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={password2Valid} />}

        <input
          className="input-form"
          id="phone"
          type="phone"
          placeholder="Telefono"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        {formSubmited && <ErrorMessage message={phoneValid} />}

        <input className="button-submit" type="submit" value="REGISTRARSE" />
        <span className="form-message">
          Ya tenes cuenta? <Link to="/auth/login">Logueate</Link>
        </span>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
