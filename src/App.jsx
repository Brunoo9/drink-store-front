import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoProvider";
import WebRoutes from "./routes/WebRoutes";
import { AuthProvider } from "./Context/AuthProvider";
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <CarritoProvider>
        <WebRoutes />
      </CarritoProvider>
    </AuthProvider>
  </BrowserRouter>
);
export default App;
