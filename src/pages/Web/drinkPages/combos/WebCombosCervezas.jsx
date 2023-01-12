import { useEffect, useState } from "react";
import MasterProductsPage from "../MasterProductsPage";
import clienteAxios from "../../../../config/clienteAxios";

const WebCombosCervezas = () => {
  const [combos, setCombos] = useState([]);
  useEffect(() => {
    const getCombosCervezas = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/9");
        setCombos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCombosCervezas();
  }, []);
  return <MasterProductsPage products={combos} title={"Combos Cervezas"} />;
};

export default WebCombosCervezas;
