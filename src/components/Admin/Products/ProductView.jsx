import React from "react";

import { Modal, Typography, Image, Space } from "antd";

const ProductView = ({ modalViewOpen, setModalViewOpen, product }) => {
  const { Text } = Typography;
  const {
    nombreproducto,
    descripcion,
    precio,
    codproducto,
    nombrecategoria,
    nombresub,
    img1,
  } = product;
  const handleCancel = () => {
    setModalViewOpen(false);
  };

  return (
    <Modal
      title={`Vista del producto ${codproducto}`}
      open={modalViewOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <Typography>
        <pre>
          <Text strong>Nombre del producto: </Text> {nombreproducto} <br />
          <Text strong>Descripción: </Text> {descripcion} <br />
          <Text strong>Precio: </Text>$ {precio} <br />
          <Text strong>Categoría: </Text> {nombrecategoria}
          <br />
          <Text strong>Subcategoría: </Text> {nombresub} <br />
          <Space size="small" direction="vertical">
            <Text strong>Imágenes: </Text>
            <Space size="middle">
              <Image
                width={100}
                preview={false}
                src={img1}
                alt={nombreproducto}
              />
            </Space>
          </Space>
        </pre>
      </Typography>
    </Modal>
  );
};

export default ProductView;
