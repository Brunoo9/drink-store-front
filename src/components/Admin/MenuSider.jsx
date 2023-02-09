import React from "react";
import { Layout, Menu, Image } from "antd";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./adminComponent.css";
const MenuSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;

  const onClick = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
    //todo: alerta de deslogueo aca
  };
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      <Link className="itemSider" to="/admin">
        Reportes
      </Link>,
      "1",
      <Icon icon="carbon:text-link-analysis" />
    ),
    getItem("Productos", "2", <Icon icon="fluent-mdl2:product-variant" />, [
      getItem(
        <Link className="itemSider" to="productos">
          Ver productos
        </Link>,
        "3"
      ),
      getItem(
        <Link className="itemSider" to="productos/alta-producto">
          Alta Producto
        </Link>,
        "4"
      ),
    ]),
    getItem(
      <Link className="itemSider" to="/">
        Ir a la tienda
      </Link>,
      "5",
      <Icon icon="mdi:shop" />
    ),
    getItem(
      <Link className="itemSider" to="/" onClick={onClick}>
        Cerrar Sesión
      </Link>,
      "6",
      <Icon icon="mdi:power-standby" />
    ),
    // getItem(
    //   <Link className="itemSider" to="ordenes">
    //     Ordenes
    //   </Link>,
    //   "5",
    //   <Icon icon="icon-park-outline:transaction-order" />
    // ),
    // getItem(
    //   <Link className="itemSider" to="usuarios">
    //     Usuarios
    //   </Link>,
    //   "6",
    //   <Icon icon="eos-icons:admin-outlined" />
    // ),
    // getItem(
    //   <Link className="itemSider" to="clientes">
    //     Clientes
    //   </Link>,
    //   "7",
    //   <Icon icon="clarity:users-line" />
    // ),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="bg-black"
    >
      <div className="flex justify-center">
        <Image src={Logo} alt="logo drink store" preview={false} height={80} />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={{ backgroundColor: "#1E293B" }}
      />
    </Sider>
  );
};

export default MenuSider;
