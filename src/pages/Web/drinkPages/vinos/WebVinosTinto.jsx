import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebVinosTinto = () => {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    const getWines = async () => {
      try {
        const { data } = await clienteAxios("/products/getbysub/4");
        setWines(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWines();
  }, []);
  return <MasterProductsPage products={wines} title={"Vinos Tinto"} />;
};

export default WebVinosTinto;
