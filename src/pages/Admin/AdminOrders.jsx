import { Space, Table, Tag } from "antd";
import "../pages.css";
const AdminOrders = () => {
  const columns = [
    {
      title: "Núm. Orden",
      dataIndex: "orden",
      key: "orden",
      // render: (text) => <a>{text}</a>, // para renderizarlo como un link
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Productos",
      dataIndex: "producto",
      key: "producto",
      render: (_, { producto }) =>
        producto.map((product, index) => {
          return (
            <Tag key={index} color="geekblue">
              {product.name}
            </Tag>
          );
        }),
    },

    {
      title: "Total orden",
      dataIndex: "total",
      key: "total",
    },
  ];
  const data = [
    {
      key: "1",
      orden: "John Brown",
      fecha: 32,
      producto: [
        { name: "Auriculares Kotion Elite Blue" },
        { name: "Mouse Pad Gamer" },
      ],
      cantidad: 2,
      total: "$300",
    },
    {
      key: "2",
      orden: "Jim Green",
      fecha: 42,
      producto: [{ name: "Teclado Redragon Kumara" }],
      cantidad: 2,
      total: "$500",
    },
    {
      key: "3",
      orden: "Joe Black",
      fecha: 32,
      producto: [
        { name: "ELLALDASLDSALDSALADLADL" },
        { name: "ELLALDASLDSALDSALADLADL" },
      ],
      cantidad: 2,
      total: "$688",
    },
  ];
  return (
    <section>
      <h1 className="title">Listado de ordenes</h1>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </section>
  );
};

export default AdminOrders;
