import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebVinos = () => {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    const getWines = async () => {
      try {
        const { data } = await clienteAxios("/products/getbycat/3");
        setWines(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWines();
  }, []);

  const filters = [
    {
      key: 1,
      label: "Tinto",
      url: "/productos/vinos/tinto",
    },
    {
      key: 2,
      label: "Blanco",
      url: "/productos/vinos/blanco",
    },
    {
      key: 3,
      label: "Espumoso",
      url: "/productos/vinos/espumoso",
    },

    {
      key: 6,
      label: "Combos",
      url: "/productos/combos/vinos",
    },
  ];
  return (
    <MasterProductsPage filters={filters} products={wines} title={"Vinos"} />
  );
};

export default WebVinos;
