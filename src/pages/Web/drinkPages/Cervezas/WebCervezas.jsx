import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebCervezas = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // consultar a la bd las espirituosas
    const getBeers = async () => {
      try {
        const { data } = await clienteAxios("products/getbycat/1");
        setBeers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeers();
  }, []);

  const filters = [
    {
      key: 1,
      label: "Rubia",
      url: "/productos/cervezas/rubia",
    },
    {
      key: 2,
      label: "Negra",
      url: "/productos/cervezas/negra",
    },
    {
      key: 3,
      label: "Roja",
      url: "/productos/cervezas/roja",
    },

    {
      key: 6,
      label: "Combos",
      url: "/productos/combos/cervezas",
    },
  ];
  return (
    <MasterProductsPage filters={filters} products={beers} title={"Cervezas"} />
  );
};

export default WebCervezas;
