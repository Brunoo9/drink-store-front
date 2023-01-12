import { Modal } from "antd";
const ProductEdit = ({ modalEditOpen, setModalEditOpen, product }) => {
  const handleCancel = () => {
    setModalEditOpen(false);
  };

  return (
    <Modal
      title="Editar producto"
      open={modalEditOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <h2>{product.nombreproducto}</h2>
    </Modal>
  );
};

export default ProductEdit;
