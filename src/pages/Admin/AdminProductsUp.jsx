import React from "react";

import FormProductUp from "../../components/Admin/Products/FormProductUp";
const AdminProductsUp = () => {
  return (
    <section>
      <div>
        <h1>Alta Producto</h1>
      </div>
      <div className="form-producto">
        <FormProductUp />
      </div>
    </section>
  );
};

export default AdminProductsUp;
