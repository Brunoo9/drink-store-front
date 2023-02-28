import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../../../../components/Web/MasterProductsPage";

const WebEspirituosas = () => {
  const [espirituosas, setEspirituosas] = useState([]);

  useEffect(() => {
    const getEspirituosas = async () => {
      try {
        const { data } = await clienteAxios("products/getbycat/2");
        setEspirituosas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getEspirituosas();
  }, []);

  const filters = [
    {
      key: 1,
      label: "Vodka",
      url: "/productos/espirituosas/vodka",
    },
    {
      key: 2,
      label: "Gin",
      url: "/productos/espirituosas/gin",
    },
    {
      key: 3,
      label: "Whisky",
      url: "/productos/espirituosas/whiskies",
    },
    {
      key: 4,
      label: "Aperitivos",
      url: "/productos/espirituosas/aperitivos",
    },
    {
      key: 5,
      label: "Licores",
      url: "/productos/espirituosas/licores",
    },
    {
      key: 6,
      label: "Combos",
      url: "/productos/combos/espirituosas",
    },
  ];
  return (
    <MasterProductsPage
      filters={filters}
      products={espirituosas}
      title={"Espirituosas"}
    />
  );
};

export default WebEspirituosas;
