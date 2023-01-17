import ArticuloCarrito from "./ArticuloCarrito";
import { Button, Drawer, message } from "antd";
import useCarrito from "../../Hooks/useCarrito";

const Cart = ({ openCarrito, setOpenCarrito }) => {
  const { clearCart, cartItems, subTotal } = useCarrito();

  const onClose = () => {
    setOpenCarrito(false);
  };
  const handleClick = () => {
    clearCart();
    message.success("Se limpió el carrito correctamente");
  };

  return (
    <Drawer
      title="Carrito de compras"
      placement="right"
      onClose={onClose}
      open={openCarrito}
      drawerStyle={{ backgroundColor: "#262626" }}
      bodyStyle={{ color: "#fff" }}
      footer={
        <div className="font-bold text-white flex flex-col gap-4">
          <div className=" flex gap-2 items-center justify-around text-lg">
            <p>SUBTOTAL: </p>
            <p className="text-red-500">{subTotal}</p>
          </div>
          <div className="flex  items-center justify-center">
            <Button
              className="uppercase  font-bold flex items-center justify-center w-full text-white border-red-500 hover:border-red-500 hover:text-white hover:bg-red-500 focus:bg-transparent focus:text-white focus:border-red-500"
              onClick={() => {
                message.info("Proximamente");
              }}
            >
              Revisar Pedido
            </Button>
          </div>
        </div>
      }
      extra={
        <Button
          className="flex items-center justify-center text-white border-red-500 hover:border-red-500 hover:text-white hover:bg-red-500 focus:bg-transparent focus:text-white focus:border-red-500 w-full"
          disabled={cartItems.length > 0 ? false : true}
          onClick={handleClick}
        >
          Vaciar Carrito
        </Button>
      }
    >
      <ArticuloCarrito />
    </Drawer>
  );
};

export default Cart;
