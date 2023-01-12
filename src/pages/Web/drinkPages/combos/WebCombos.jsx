import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebCombos = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    const getCombos = async () => {
      try {
        const { data } = await clienteAxios("/products/getbycat/5");
        setCombos(data);
      } catch (error) {}
    };
    getCombos();
  }, []);

  const filters = [
    {
      key: 1,
      label: "Cervezas",
      url: "/productos/combos/cervezas",
    },
    {
      key: 2,
      label: "Vinos",
      url: "/productos/combos/vinos",
    },
    {
      key: 3,
      label: "Espirituosas",
      url: "/productos/combos/espirituosas",
    },
  ];

  return (
    <MasterProductsPage filters={filters} products={combos} title={"Combos"} />
  );
};

export default WebCombos;
