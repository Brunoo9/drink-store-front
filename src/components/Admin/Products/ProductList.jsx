import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Avatar, Button, List, Tooltip, Modal, Table, Space } from "antd";
import { useEffect, useState } from "react";
import clienteAxios from "../../../config/clienteAxios";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";

const ProductList = () => {
  const [fillProducts, setFillProducts] = useState([]);
  const [product, setProduct] = useState({}); // producto que selecicono en la lista
  const { confirm } = Modal;

  const [modalViewOpen, setModalViewOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await clienteAxios("/products/getall");

        setFillProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  const showModal = (item, tipo) => {
    if (tipo === "ver") {
      setModalViewOpen(true);
    } else if (tipo === "editar") {
      setModalEditOpen(true);
    }

    setProduct(item);
  };

  const showConfirm = (item) => {
    confirm({
      title: "Está seguro que desea eliminar este producto?",
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        // Eliminar el paciente
        try {
          // await clienteAxios.put(`/pacients/delete/${record.key}`);
        } catch (error) {
          console.log(error);
        }
      },

      onCancel() {},
    });
  };

  const columns = [
    {
      title: "Código producto",
      dataIndex: "codproducto",
      key: "codproducto",
    },
    {
      title: "Nombre producto",
      dataIndex: "nombreproducto",
      key: "nombreproducto",
      // ...getColumnSearchProps("name"),
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
      render: (text) => <p>$ {text}</p>,
    },
    {
      title: "Acciones",
      key: "action",

      render: (e, record) => (
        <Space size="middle">
          {/* se podria optimizar esta parte, sacando los button y haciendo lo de react.component */}
          <Tooltip placement="top" title={"Ver producto"}>
            <Button
              className="iconTable"
              onClick={() => {
                showModal(record, "ver");
              }}
            >
              <EyeOutlined style={{ color: "#1A374D" }} />
            </Button>
          </Tooltip>

          <Tooltip placement="top" title={"Editar producto"}>
            <Button
              className="iconTable"
              onClick={() => {
                showModal(record, "editar");
              }}
            >
              <EditOutlined style={{ color: "#1A374D" }} />
            </Button>
          </Tooltip>

          <Tooltip placement="top" title={"Eliminar producto"}>
            <Button
              className="iconTable"
              onClick={() => {
                showConfirm(record);
              }}
            >
              <DeleteOutlined style={{ color: "#1A374D" }} />
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data = fillProducts.map((product) => ({
    key: product.idproducto,
    nombreproducto: product.nombreproducto,
    descripcion: product.descripcion,
    precio: product.precio,
    img1: product.img1,
    img2: product?.img2,
    img3: product?.img3,
    codproducto: product.codproducto,
    idcategoria: product.categoria.idcategoria,
    nombrecategoria: product.categoria.nombrecategoria,
    idsubcategoria: product.subcategoria.idsubcategoria,
    nombresub: product.subcategoria.nombresub,
  }));

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <ProductView
        modalViewOpen={modalViewOpen}
        setModalViewOpen={setModalViewOpen}
        product={product}
      />
      <ProductEdit
        modalEditOpen={modalEditOpen}
        setModalEditOpen={setModalEditOpen}
        product={product}
      />
    </>
  );
};

export default ProductList;
