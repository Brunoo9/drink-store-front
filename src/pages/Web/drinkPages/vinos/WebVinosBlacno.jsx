import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebVinosBlacno = () => {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    const getWines = async () => {
      try {
        const { data } = await clienteAxios("/products/getbysub/5");
        setWines(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWines();
  }, []);
  return <MasterProductsPage products={wines} title={"Vinos Blanco"} />;
};

export default WebVinosBlacno;
