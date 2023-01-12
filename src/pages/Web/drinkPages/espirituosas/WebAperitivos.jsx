import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";
const WebAperitivos = () => {
  const [aperitivos, setAperitivos] = useState([]);
  useEffect(() => {
    const getApertivos = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/12");
        setAperitivos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApertivos();
  }, []);
  return <MasterProductsPage products={aperitivos} title={"Aperitivos"} />;
};

export default WebAperitivos;
