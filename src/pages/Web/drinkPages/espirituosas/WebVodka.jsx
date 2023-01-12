import { useEffect, useState } from "react";
import clienteAxios from "../../../../config/clienteAxios";
import MasterProductsPage from "../MasterProductsPage";

const WebVodka = () => {
  const [vodkas, setVodkas] = useState([]);
  useEffect(() => {
    const getVodkas = async () => {
      try {
        const { data } = await clienteAxios("products/getbysub/15");
        setVodkas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVodkas();
  }, []);
  return <MasterProductsPage products={vodkas} title={"Vodka"} />;
};

export default WebVodka;
