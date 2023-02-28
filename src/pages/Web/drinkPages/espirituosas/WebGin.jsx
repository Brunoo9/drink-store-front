import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebGin = () => {
  const [gin, setGin] = useState([]);
  useEffect(() => {
    const getGin = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/14");
        setGin(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGin();
  }, []);
  return <MasterProductsPage products={gin} title={"Gin"} />;
};

export default WebGin;
