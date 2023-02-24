import { useContext } from "react";
import AlertContext from "../Context/AlertProvider";

const useAlert = () => {
  return useContext(AlertContext);
};

export default useAlert;
