import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebWhiskies = () => {
  const [whiskies, setWhiskies] = useState([]);
  useEffect(() => {
    const getWhiskies = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/13");
        setWhiskies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWhiskies();
  }, []);
  return <MasterProductsPage products={whiskies} title={"Whiskies"} />;
};

export default WebWhiskies;
