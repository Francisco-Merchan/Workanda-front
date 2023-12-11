import {
  DIFFERENT_PASSWORD,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
  INVALID_PHONE,
} from "./messageErrors";

export const formLoginData = {
  email: "",
  password: "",
};

export const formLoginValidations = {
  email: [(value) => value?.includes("@"), INVALID_EMAIL],
  password: [(value) => value?.length >= 6, INVALID_PASSWORD],
};

export const fromRegisterData = {
  name: "",
  email: "",
  password: "",
  password2: "",
  phone: "",
};

export const formRegisterValidations = {
  name: [(value) => value?.length >= 3, INVALID_NAME],
  email: [(value) => value?.includes("@"), INVALID_EMAIL],
  password: [(value) => value?.length >= 6, INVALID_PASSWORD],
  password2: [(value, value2) => value === value2, DIFFERENT_PASSWORD],
  phone: [(value) => value?.length >= 10, INVALID_PHONE],
};

export const formModalValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
