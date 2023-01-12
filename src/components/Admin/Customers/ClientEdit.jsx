import { Modal } from "antd";
import React from "react";

const ClientEdit = ({ setclientModalEdit, clientModalEdit, client }) => {
  const handleCancel = () => {
    setclientModalEdit(false);
  };

  return (
    <Modal
      title={`Editar ${client.nombrecliente} ID:${client.idcliente}`}
      open={clientModalEdit}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <h2>{client.nombrecliente}</h2>
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

export default ClientEdit;
