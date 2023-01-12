import { useState } from "react";
import { Button, Drawer } from "antd";
import { FilterFilled } from "@ant-design/icons";

import ProductsList from "../ProductsList";
import FilterList from "../FilterList";

const MasterProductsPage = ({ filters, products, title }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const onClickFilter = () => {
    setOpenFilter(true);
  };
  const onClose = () => {
    setOpenFilter(false);
  };
  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-4 w-full underline underline-offset-8 decoration-red-600 mb-10">
        {title}
      </h1>
      <main className="flex p-2 items-start gap-10 ">
        {filters ? (
          <aside className="flex-col gap-4 hidden xl:flex md:flex-col  ml-4 ">
            <h3 className="font-bold underline underline-offset-4 decoration-red-600 ">
              Subcategorias
            </h3>
            <ul className="pl-2">
              <FilterList filters={filters} />
            </ul>
          </aside>
        ) : null}

        <section className="w-full text-center ">
          {filters ? (
            <div className="flex items-center">
              <Button
                icon={<FilterFilled />}
                className="xl:hidden mb-4 focus:bg-red-500 focus:text-white self-start flex items-center border-none hover:bg-transparent hover:text-red-500"
                onClick={onClickFilter}
              >
                Filtrar
              </Button>
            </div>
          ) : null}

          <ProductsList products={products} />
        </section>
      </main>
      <Drawer
        title="Subcategorias"
        placement="right"
        onClose={onClose}
        open={openFilter}
        drawerStyle={{ backgroundColor: "#262626" }}
      >
        <ul className="flex flex-col gap-2 text-white">
          <FilterList filters={filters} />
        </ul>
      </Drawer>
    </>
  );
};

export default MasterProductsPage;
