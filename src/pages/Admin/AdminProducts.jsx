import "../pages.css";

import ProductList from "../../components/Admin/Products/ProductList";
const AdminProducts = () => {
  return (
    <section className="px-12 py-8">
      <h1 className=" mb-10 text-center text-2xl uppercase font-bold underline underline-offset-8">
        Listado{" "}
        <span className="text-2xl uppercase font-bold text-red-500">
          productos
        </span>
      </h1>
      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default AdminProducts;
