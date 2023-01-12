import { DeleteOutlined } from "@ant-design/icons";
import "./webComponents.css";
import { Button, InputNumber, Divider, message } from "antd";
import useCarrito from "../../Hooks/useCarrito";

const ArticuloCarrito = () => {
  const { cartItems, deleteItemToCart } = useCarrito();

  return cartItems?.length > 0 ? (
    cartItems.map((item) => (
      <div key={item.idproducto}>
        <div className="articulo " key={item.idproducto}>
          <div className="articulo-img">
            <img src={item.img1} alt="" />
          </div>
          <div className="articulo-description">
            <h3 className="text-slate-300 uppercase ">{item.nombreproducto}</h3>

            <p className="my-2 font-bold text-red-500">ARS$ {item.precio}</p>
            <div className="articulo-acciones">
              <InputNumber min={1} max={10} value={item.cantidad} />
              <Button
                type="primary"
                className="border-red-500 hover:bg-red-500 hover:border-red-500 focus:bg-transparent focus:border-red-500  "
                icon={<DeleteOutlined className="text-xl" />}
                shape="circle"
                onClick={() => {
                  deleteItemToCart(item);
                  message.success("Producto eliminado correctamente");
                }}
              />
            </div>
          </div>
        </div>
        <Divider className=" bg-zinc-700" />
      </div>
    ))
  ) : (
    <p className="font-bold text-center uppercase text-zinc-600">
      Carrito Vacío
    </p>
  );
};

export default ArticuloCarrito;
