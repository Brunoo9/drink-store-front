import { Modal } from "antd";

const UserCreate = ({ userCreateModal, setUserCreateModal }) => {
  const handleCancel = () => {
    setUserCreateModal(false);
  };
  return (
    <Modal
      title="Crear usuario"
      open={userCreateModal}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <h2>Creando usuario</h2>
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

export default UserCreate;
