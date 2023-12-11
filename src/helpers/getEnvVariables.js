export const getEnvVariables = () => {
  return {
    APP_API_URL: import.meta.env.VITE_APP_API_URL,
  };
};
