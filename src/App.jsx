import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/WebRoutes";
import { CarritoProvider } from "./Context/CarritoProvider";
import { AuthProvider } from "./Context/AuthProvider";
import { AlertProvider } from "./Context/AlertProvider";
import "antd/dist/antd.css";
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AlertProvider>
        <CarritoProvider>
          <WebRoutes />
        </CarritoProvider>
      </AlertProvider>
    </AuthProvider>
  </BrowserRouter>
);
export default App;
