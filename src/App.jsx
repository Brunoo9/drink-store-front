import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/WebRoutes";
import { CarritoProvider } from "./Context/CarritoProvider";
import { AuthProvider } from "./Context/AuthProvider";
import { AlertProvider } from "./Context/AlertProvider";
import { ProductProvider } from "./Context/ProductProvider";
import "antd/dist/antd.css";
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <AlertProvider>
          <CarritoProvider>
            <WebRoutes />
          </CarritoProvider>
        </AlertProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);
export default App;
