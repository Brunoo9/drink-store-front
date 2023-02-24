import { createContext, useState } from "react";
import clienteAxios from "../config/clienteAxios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const getProduct = async (id) => {
    try {
      const { data } = await clienteAxios(`products/getone/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        getProduct,
        product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider };
export default ProductContext;
