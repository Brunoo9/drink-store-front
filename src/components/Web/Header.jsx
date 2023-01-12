import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Badge, Drawer } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import "./webComponents.css";
import logo from "../../assets/logo.png";
import letraLogo from "../../assets/letraLogo.svg";
import useCarrito from "../../Hooks/useCarrito";
import Cart from "./Cart";
const Header = () => {
  const navigate = useNavigate();

  const [openCarrito, setOpenCarrito] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const { cartItems } = useCarrito();

  const onClose = () => {
    setOpenMenu(false);
  };
  const onClickCarrito = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
    setOpenCarrito(true);
  };
  const onClick = (e) => {
    navigate("/login");
    if (openMenu) {
      setOpenMenu(false);
    }
  };

  const menu = [
    {
      key: 1,
      label: "Espirituosas",
      url: "productos/espirituosas",
    },
    {
      key: 2,
      label: "Whiskies",
      url: "productos/espirituosas/whiskies",
    },
    {
      key: 3,
      label: "Aperitivos",
      url: "productos/espirituosas/aperitivos",
    },
    {
      key: 4,
      label: "Cervezas",
      url: "productos/cervezas",
    },
    {
      key: 5,
      label: "Vinos",
      url: "productos/vinos",
    },
    {
      key: 6,
      label: "Combos",
      url: "productos/combos",
    },
  ];

  return (
    <header>
      <nav className="h-20 bg-black flex items-center justify-between">
        <div className="w-28 min-w-min">
          <Link to="/">
            <img className="" src={logo} alt="logo drink store" />
          </Link>
        </div>

        <Link to="/">
          <img className="w-60" src={letraLogo} />
        </Link>

        <div className="botones">
          <div className="carrito-botones">
            <Button
              className={`hidden md:flex md:items-center border-px border-red-500 text-white hover:bg-red-500 hover:text-white hover:border-red-500 focus:bg-red-500 focus:text-white focus:border-red-500 mr-10`}
              onClick={onClick}
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
        <Button
          className="md:hidden mr-4 font-mono border-px border-red-500 text-white hover:bg-red-500 hover:text-white hover:border-red-500 focus:bg-red-500 focus:text-white focus:border-red-500"
          icon={<MenuOutlined />}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </nav>

      <nav
        className={`hidden md:flex  bg-neutral-800 text-base font-medium   h-12`}
      >
        <div className="flex   gap-4 w-full items-center justify-center text-white">
          {menu.map((m) => (
            <Link
              to={m.url}
              className=" hover:text-red-500 border-b border-transparent hover:border-white"
              key={m.key}
            >
              {m.label}
            </Link>
          ))}
          <div>
            <Button
              className={`flex items-center border-none  hover:bg-transparent text-white hover:text-red-500 focus:bg-red-500 focus:text-white focus:border-red-500`}
              onClick={onClickCarrito}
              icon={<ShoppingCartOutlined />}
            >
              Carrito
            </Button>
          </div>
        </div>
      </nav>

      {/*SE PODRIAN HACER UN COMPONENTE PARA CADA DRAWER */}
      <Drawer
        placement="left"
        onClose={onClose}
        open={openMenu}
        drawerStyle={{ backgroundColor: "#262626" }}
        bodyStyle={{ color: "#fff" }}
      >
        <nav className={`flex flex-col text-base font-medium  h-full`}>
          <div className="flex flex-col  gap-3 w-full items-center justify-center text-white">
            {menu.map((m) => (
              <Link
                to={m.url}
                className=" hover:text-red-500 border-b border-transparent hover:border-white"
                key={m.key}
                onClick={() => setOpenMenu(false)} // que se cierre cuando apreto alguna de esas opciones
              >
                {m.label}
              </Link>
            ))}
            <div>
              <Button
                className={`flex items-center border-none  hover:bg-transparent font-mono border-px  text-white hover:text-red-500 focus:bg-red-500 focus:text-white focus:border-red-500`}
                onClick={onClickCarrito}
                icon={<ShoppingCartOutlined />}
              >
                Carrito
              </Button>
            </div>
            <div className="carrito-botones">
              <Button
                className={`flex items-center font-mono border-px border-red-500 text-white hover:bg-red-500 hover:text-white hover:border-red-500 focus:bg-red-500 focus:text-white focus:border-red-500`}
                onClick={onClick}
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </nav>
      </Drawer>

      <Cart openCarrito={openCarrito} setOpenCarrito={setOpenCarrito} />
    </header>
  );
};

export default Header;
