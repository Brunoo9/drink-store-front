import { useContext } from "react";
import ProductContext from "../Context/ProductProvider";

const useProduct = () => {
  return useContext(ProductContext);
};

export default useProduct;
