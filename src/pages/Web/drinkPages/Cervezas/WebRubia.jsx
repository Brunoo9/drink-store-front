import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebRubia = () => {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    const getBeer = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/3");
        setBeer(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeer();
  }, []);
  return <MasterProductsPage products={beer} title={"Cervezas Rubia"} />;
};

export default WebRubia;
