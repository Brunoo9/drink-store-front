import { useContext } from "react";
import CarritoContext from "../Context/CarritoProvider";

const useCarrito = () => {
  return useContext(CarritoContext);
};

export default useCarrito;
