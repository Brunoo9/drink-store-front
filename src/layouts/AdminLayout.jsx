import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./layouts.css";
import MenuSider from "../components/Admin/MenuSider";
import MenuTop from "../components/Admin/MenuTop";
const AdminLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <MenuSider />
      <Layout className="site-layout">
        <MenuTop />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
