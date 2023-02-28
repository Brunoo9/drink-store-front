import { useEffect, useState } from "react";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";
import clienteAxios from "../../../../config/clienteAxios";
const WebCombosEspirituosas = () => {
  const [combos, setCombos] = useState([]);
  useEffect(() => {
    const getCombosEspirituosa = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/10");
        setCombos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCombosEspirituosa();
  }, []);
  return <MasterProductsPage products={combos} title={"Combos Espirituosas"} />;
};

export default WebCombosEspirituosas;
