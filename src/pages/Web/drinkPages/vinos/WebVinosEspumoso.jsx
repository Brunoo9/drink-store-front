import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebVinosEspumoso = () => {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    const getWines = async () => {
      try {
        const { data } = await clienteAxios("/products/getbysub/6");
        setWines(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWines();
  }, []);
  return <MasterProductsPage products={wines} title={"Vinos Espumoso"} />;
};

export default WebVinosEspumoso;
