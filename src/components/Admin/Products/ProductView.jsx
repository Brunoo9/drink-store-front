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
    img2,
    img3,
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
              <Image width={100} src={img1} />
              {img2 ? <Image width={100} src={img2} /> : ""}
              {img3 ? <Image width={100} src={img3} /> : ""}
            </Space>
          </Space>
        </pre>
      </Typography>
      {/* <h1>{name}</h1>
      <p>
        Fecha de Nacimiento: {moment(pacient.fechaNac).format("DD/MM/YYYY")}{" "}
      </p>
      <p>Edad: {age}</p>
      <p>Nro. Documento: {documento}</p>
      <p>Domicilio: {domicilio}</p>
      <p>Obra Social: {obraSocial}</p>
      <p>Sexo: {sex}</p> */}
    </Modal>
  );
};

export default ProductView;
