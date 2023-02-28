import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebRoja = () => {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    const getBeer = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/1");
        setBeer(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeer();
  }, []);
  return <MasterProductsPage products={beer} title={"Cervezas Roja"} />;
};

export default WebRoja;
