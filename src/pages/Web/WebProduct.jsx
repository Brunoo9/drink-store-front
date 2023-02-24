import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import useProduct from "../../Hooks/useProduct";
import useCarrito from "../../Hooks/useCarrito";
const WebProduct = () => {
  const { id } = useParams();
  const { getProduct, product } = useProduct();
  const { addItemToCart } = useCarrito();
  useEffect(() => {
    getProduct(id);
  }, []);

  const handleButton = (product) => {
    addItemToCart(product);
    message.success("Producto agregado al carrito");
  };
  const { nombreproducto, descripcion, precio, img1 } = product;

  return (
    <div className="p-6 mt-10 flex justify-center">
      <div className="flex flex-col items-center sm:items-start sm:flex-row justify-center  gap-6  md:w-3/4">
        <img src={img1} alt="Imagen Producto" className="w-56" />
        <div>
          <h1 className="font-black text-2xl ">{nombreproducto}</h1>
          <p className="ml-2 mt-2 md:w-3/4">{descripcion}</p>
          <p className="font-black text-3xl mt-4 text-red-600">ARS${precio}</p>
          <button
            className="p-2 w-full xl:w-3/4 bg-red-500 text-white mt-4 hover:bg-red-600 transition-colors "
            onClick={(e) => handleButton(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebProduct;
