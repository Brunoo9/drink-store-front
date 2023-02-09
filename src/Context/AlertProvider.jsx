import { createContext, useState, useEffect } from "react";
import { notification } from "antd";
const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const openError = (description) => {
    notification.error({
      message: "Error!",
      description: `${description}`,
      duration: 2,
    });
  };
  const openSuccess = (description) => {
    notification.success({
      message: "Éxito!",
      description: `${description}`,
      duration: 2,
    });
  };
  return (
    <AlertContext.Provider
      value={{
        openError,
        openSuccess,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
export default AlertContext;
