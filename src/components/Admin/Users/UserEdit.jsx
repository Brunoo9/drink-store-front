import { Modal } from "antd";

const UserEdit = ({ setUserModalEdit, userModalEdit, user }) => {
  const handleCancel = () => {
    setUserModalEdit(false);
  };
  return (
    <Modal
      title={`Editar usuario ID:${user.idusuario}`}
      open={userModalEdit}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <h2>EDITANDO USUARIO</h2>
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

export default UserEdit;
