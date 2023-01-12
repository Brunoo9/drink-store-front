import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebLicores = () => {
  const [licores, setLicores] = useState([]);
  useEffect(() => {
    const getGin = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/16");
        setLicores(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGin();
  }, []);
  return <MasterProductsPage products={licores} title={"Licores"} />;
};

export default WebLicores;
