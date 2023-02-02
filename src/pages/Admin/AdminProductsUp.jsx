import React from "react";

import FormProductUp from "../../components/Admin/Products/FormProductUp";
const AdminProductsUp = () => {
  return (
    <section className="px-10 py-12">
      <h1 className="mb-10 text-center text-2xl uppercase font-bold underline underline-offset-8">
        Alta{" "}
        <span className="text-2xl uppercase font-bold text-red-500">
          producto
        </span>
      </h1>
      <div className="form-producto">
        <FormProductUp />
      </div>
    </section>
  );
};

export default AdminProductsUp;
