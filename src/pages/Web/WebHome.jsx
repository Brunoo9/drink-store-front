import { useEffect, useState } from "react";
import clienteAxios from "../../config/clienteAxios";

import "../pages.css";

import MasterProductsPage from "./drinkPages/MasterProductsPage";

const WebHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await clienteAxios("/products/getall");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return <MasterProductsPage products={products} title={"Productos"} />;
};

export default WebHome;
