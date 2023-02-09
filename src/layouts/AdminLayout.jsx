import { Layout } from "antd";
import { Outlet, Navigate } from "react-router-dom";
import "./layouts.css";
import MenuSider from "../components/Admin/MenuSider";
import MenuTop from "../components/Admin/MenuTop";
import useAuth from "../Hooks/useAuth";
const AdminLayout = () => {
  const { auth, loading } = useAuth();
  const { Content } = Layout;
  if (loading) return "cargando..";
  return (
    <>
      {auth?.idusuario && auth?.rol?.nombrerol === "ADMIN" ? (
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <MenuSider />
          <Layout className="site-layout">
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminLayout;
