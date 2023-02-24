import { useState } from "react";
import { Modal } from "antd";
import FormProductEdit from "./FormProductEdit";

const ProductEdit = ({ modalEditOpen, setModalEditOpen, product }) => {
  const [fileList, setFileList] = useState([]); // state del upload
  const [valuesChanges, setValuesChanges] = useState(true); // para poder activar y desactivar el btn del form

  const handleCancel = () => {
    setModalEditOpen(false);
    setValuesChanges(true);
  };

  return (
    <Modal
      title="Editar producto"
      open={modalEditOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <FormProductEdit
        product={product}
        setFileList={setFileList}
        fileList={fileList}
        valuesChanges={valuesChanges}
        setValuesChanges={setValuesChanges}
        setModalEditOpen={setModalEditOpen}
      />
    </Modal>
  );
};

export default ProductEdit;
