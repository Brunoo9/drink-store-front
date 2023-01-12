import ArticuloCarrito from "./ArticuloCarrito";
import { Button, Drawer, message } from "antd";
import useCarrito from "../../Hooks/useCarrito";

const Cart = ({ openCarrito, setOpenCarrito }) => {
  const { clearCart, cartItems } = useCarrito();

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
        <div className="div-carrito">
          <div className="div-carrito-parrafos">
            <p>SUBTOTAL: </p>
            <p>$20000</p>
          </div>
          <div className="div-carrito-botones">
            <Button
              className="flex items-center text-white border-red-500 hover:border-red-500 hover:text-white hover:bg-red-500 focus:bg-transparent focus:text-white focus:border-red-500"
              disabled={cartItems.length > 0 ? false : true}
              onClick={handleClick}
            >
              Vaciar Carrito
            </Button>
            <Button
              className="flex items-center text-white border-red-500 hover:border-red-500 hover:text-white hover:bg-red-500 focus:bg-transparent focus:text-white focus:border-red-500"
              onClick={() => {
                message.info("Proximamente");
              }}
            >
              Revisar Pedido
            </Button>
          </div>
        </div>
      }
    >
      <ArticuloCarrito />
    </Drawer>
  );
};

export default Cart;
