import { useEffect, useState } from "react";
import MasterProductsPage from "../MasterProductsPage";
import clienteAxios from "../../../../config/clienteAxios";

const WebCombosVinos = () => {
  const [combos, setCombos] = useState([]);
  useEffect(() => {
    const getCombosVino = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/17");
        setCombos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCombosVino();
  }, []);
  return <MasterProductsPage products={combos} title={"Combos Vinos"} />;
};

export default WebCombosVinos;
