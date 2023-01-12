import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebNegra = () => {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    const getBeer = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/2");
        setBeer(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeer();
  }, []);
  return <MasterProductsPage products={beer} title={"Cervezas Negra"} />;
};

export default WebNegra;
