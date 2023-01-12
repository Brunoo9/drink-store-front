import React from "react";
import { Layout } from "antd";

const MenuTop = () => {
  const { Header } = Layout;

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#1E293B",
      }}
    ></Header>
  );
};

export default MenuTop;
