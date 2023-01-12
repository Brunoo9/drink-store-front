import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../pages/Admin/AdminHome";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminOrders from "../pages/Admin/AdminOrders";
import AdminProductsUp from "../pages/Admin/AdminProductsUp";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminClients from "../pages/Admin/AdminClients";

export const AdminRoutes = () => {
  return (
    <Route path="admin" element={<AdminLayout />}>
      <Route index element={<AdminHome />} />
      <Route path="productos" element={<AdminProducts />} />
      <Route path="productos/alta-producto" element={<AdminProductsUp />} />
      <Route path="ordenes" element={<AdminOrders />} />
      <Route path="usuarios" element={<AdminUsers />} />
      <Route path="clientes" element={<AdminClients />} />
    </Route>
  );
};
