import "../pages.css";

import ProductList from "../../components/Admin/Products/ProductList";
const AdminProducts = () => {
  return (
    <section>
      <h1 className="title">Listado de productos</h1>
      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default AdminProducts;
