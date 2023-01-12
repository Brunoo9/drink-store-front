import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  Upload,
  Space,
  message,
} from "antd";

import { useState, useEffect } from "react";

import clienteAxios from "../../../config/clienteAxios";

const FormProductUp = () => {
  const { TextArea } = Input;
  const [fileList, setFileList] = useState([]); // state del upload
  const [categories, setCategories] = useState([]); // representa las categorias de la bd
  const [subCategories, setSubCategories] = useState([]); // representa las subcategorias de la bd
  const [disable, setDisable] = useState(true); // para desactivar/activar el select subcategorias

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await clienteAxios("categories/getall");
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { imagenes } = values;
    if (imagenes.fileList.length <= 0) {
      return message.error("Debes seleccionar almenos una imágen");
    }

    const createProducts = async () => {
      let formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      formData.append("imagenes", imagenes.file);

      try {
        const { data } = await clienteAxios.post("products/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        message.success(data.msg);
        form.resetFields();
        setFileList([]);
      } catch (error) {
        console.log(error);
      }
    };

    createProducts();
  };

  const handleChange = async (value) => {
    form.setFieldsValue({
      idsubcategoria: "",
    });
    if (disable) {
      setDisable(false);
    }
    try {
      const { data } = await clienteAxios.post("categories/getallsub", {
        idcategoria: value,
      });
      setSubCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const props = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false; // retorno false para que no se suba de una la imagen
      // para que se suba cunando haga la consulta a la bd en el onFinish
    },
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    onChange: ({ fileList: newFileList, file }) => {
      setFileList(newFileList);
    },
    maxCount: 3,
    accept: ".jpg",
    listType: "picture-card",
  };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const categoryData = categories.map((cat) => ({
    value: cat.idcategoria,
    label: cat.nombrecategoria,
  }));

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      scrollToFirstError={true}
      form={form}
    >
      <Form.Item
        label="Nombre producto"
        name="nombreproducto"
        rules={[
          { required: true, message: "El nombre del producto es requerido" },
        ]}
        required={false}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Categoría" required={false}>
        <Form.Item
          name="idcategoria"
          rules={[
            {
              required: true,
              message: "Debe seleccionar al menos 1 categoría",
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(40% - 12px)",
            marginRight: "15px",
          }}
          required={false}
        >
          <Select onChange={handleChange} options={categoryData} />
        </Form.Item>
        <Form.Item
          name="idsubcategoria"
          rules={[
            {
              required: true,
              message: "Debe seleccionar al menos 1 Subcategoria",
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(40% - 12px)",
          }}
          required={false}
        >
          <Select
            disabled={disable}
            options={(subCategories || []).map((sub) => ({
              value: sub.idsubcategoria,
              label: sub.nombresub,
            }))}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Descripción"
        name="descripcion"
        required={false}
        rules={[
          { required: true, message: "La descripcion es un campo obligatorio" },
        ]}
      >
        <TextArea
          autoSize={{
            minRows: 4,
            maxRows: 6,
          }}
          maxLength={300}
          showCount
        />
      </Form.Item>

      <Form.Item
        label="Precio"
        name="precio"
        required={false}
        rules={[
          { required: true, message: "El precio es un campo obligatorio" },
        ]}
      >
        <InputNumber addonBefore="$" addonAfter="ARS" />
      </Form.Item>

      <Form.Item
        label="Imagenes"
        name="imagenes"
        rules={[{ required: true, message: "Debe colocar almenos 1 imágen" }]}
        required={false}
      >
        <Upload
          // listType="picture-card"

          fileList={fileList}
          // maxCount={3}
          // accept=".jpg"
          {...props}
        >
          {fileList.length >= 3 ? null : (
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-button">
          Crear producto
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormProductUp;
