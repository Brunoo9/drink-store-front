import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoProvider";
import WebRoutes from "./routes/WebRoutes";

const App = () => (
  <BrowserRouter>
    <CarritoProvider>
      <WebRoutes />
    </CarritoProvider>
  </BrowserRouter>
);
export default App;
