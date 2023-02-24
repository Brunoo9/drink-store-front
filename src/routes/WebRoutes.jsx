import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import WebHome from "../pages/Web/WebHome";
import WebLogin from "../pages/Web/WebLogin";
import WebRegister from "../pages/Web/WebRegister";
import WebCervezas from "../pages/Web/drinkPages/Cervezas/WebCervezas";
import WebEspirituosas from "../pages/Web/drinkPages/espirituosas/WebEspirituosas";
import WebWhiskies from "../pages/Web/drinkPages/espirituosas/WebWhiskies";
import WebAperitivos from "../pages/Web/drinkPages/espirituosas/WebAperitivos";
import WebNegra from "../pages/Web/drinkPages/Cervezas/WebNegra";
import WebVinos from "../pages/Web/drinkPages/vinos/WebVinos";
import WebVinosTinto from "../pages/Web/drinkPages/vinos/WebVinosTinto";
import WebGin from "../pages/Web/drinkPages/espirituosas/WebGin";
import WebLicores from "../pages/Web/drinkPages/espirituosas/WebLicores";
import WebVodka from "../pages/Web/drinkPages/espirituosas/WebVodka";
import WebCombos from "../pages/Web/drinkPages/combos/WebCombos";
import WebCombosEspirituosas from "../pages/Web/drinkPages/combos/WebCombosEspirituosas";
import WebCombosCervezas from "../pages/Web/drinkPages/combos/WebCombosCervezas";
import WebCombosVinos from "../pages/Web/drinkPages/combos/WebCombosVinos";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../pages/Admin/AdminHome";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminOrders from "../pages/Admin/AdminOrders";
import AdminProductsUp from "../pages/Admin/AdminProductsUp";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminClients from "../pages/Admin/AdminClients";
import WebRubia from "../pages/Web/drinkPages/Cervezas/WebRubia";
import WebRoja from "../pages/Web/drinkPages/Cervezas/WebRoja";
import WebVinosBlacno from "../pages/Web/drinkPages/vinos/WebVinosBlacno";
import WebVinosEspumoso from "../pages/Web/drinkPages/vinos/WebVinosEspumoso";
import WebProduct from "../pages/Web/WebProduct";
const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<WebHome />} />
        <Route path="login" element={<WebLogin />} />
        <Route path="register" element={<WebRegister />} />

        <Route path="productos/espirituosas" element={<WebEspirituosas />} />
        <Route path="productos/:id" element={<WebProduct />} />
        <Route
          path="productos/espirituosas/whiskies"
          element={<WebWhiskies />}
        />
        <Route
          path="productos/espirituosas/aperitivos"
          element={<WebAperitivos />}
        />
        <Route path="productos/espirituosas/gin" element={<WebGin />} />
        <Route path="productos/espirituosas/licores" element={<WebLicores />} />
        <Route path="productos/espirituosas/vodka" element={<WebVodka />} />
        <Route path="productos/cervezas" element={<WebCervezas />} />
        <Route path="productos/cervezas/rubia" element={<WebRubia />} />
        <Route path="productos/cervezas/negra" element={<WebNegra />} />
        <Route path="productos/cervezas/roja" element={<WebRoja />} />
        <Route path="productos/vinos" element={<WebVinos />} />
        <Route path="productos/vinos/tinto" element={<WebVinosTinto />} />
        <Route path="productos/vinos/blanco" element={<WebVinosBlacno />} />
        <Route path="productos/vinos/espumoso" element={<WebVinosEspumoso />} />
        <Route path="productos/combos" element={<WebCombos />} />
        <Route
          path="productos/combos/cervezas"
          element={<WebCombosCervezas />}
        />
        <Route
          path="productos/combos/espirituosas"
          element={<WebCombosEspirituosas />}
        />
        <Route path="productos/combos/vinos" element={<WebCombosVinos />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="productos" element={<AdminProducts />} />
        <Route path="productos/alta-producto" element={<AdminProductsUp />} />
        <Route path="ordenes" element={<AdminOrders />} />
        <Route path="usuarios" element={<AdminUsers />} />
        <Route path="clientes" element={<AdminClients />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;
