import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";

import { useState, useEffect } from "react";

import clienteAxios from "../../../config/clienteAxios";
import "../adminComponent.css";

const FormProductEdit = ({
  product,
  fileList,
  setFileList,
  setModalEditOpen,
  valuesChanges,
  setValuesChanges,
}) => {
  const [categories, setCategories] = useState([]); // representa las categorias de la bd
  const [subCategories, setSubCategories] = useState([]); // representa las subcategorias de la bd
  const [disable, setDisable] = useState(true); // para desactivar/activar el select subcategorias
  const [imageDeleted, setImageDeleted] = useState([]); // imagen eliminada del upload
  const [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(() => {
    setDisable(false); // activo el select de subcategorias

    getSub(product?.idcategoria); // lleno el campo de subcategorias

    // lleno los campos con los datos del producto seleccionado
    form.setFieldsValue({
      nombreproducto: product?.nombreproducto,
      descripcion: product?.descripcion,
      idcategoria: product?.idcategoria,
      idsubcategoria: product?.idsubcategoria,
      precio: product?.precio,
    });

    // lleno el upload con la imagen de la bd
    const fillFilesList = async () => {
      await setFileList([
        {
          uid: "1",
          name: "img1",
          status: "done",
          url: product?.img1,
        },
      ]);
    };
    fillFilesList();
    getCategories();
  }, [product]);

  const getCategories = async () => {
    try {
      const { data } = await clienteAxios("categories/getall");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  //TODO: PASARLOS A UN CONTEXT PARA OBETENER LAS CATEGORIAS Y LAS SUBCATEGORIAS
  const getSub = async (idcategoria) => {
    try {
      const { data } = await clienteAxios.post("categories/getallsub", {
        idcategoria,
      });
      setSubCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = (values) => {
    if (fileList.length <= 0) {
      return message.error("Debes seleccionar almenos una imágen");
    }
    const updateProducts = async () => {
      let formData = new FormData();

      imageDeleted.forEach((img) => {
        // por si se elimino alguna de las 3 imagens que pueden venir de la bd
        if (img.name === "img1") formData.append("img1Deleted", true);
        if (img.name === "img2") formData.append("img2Deleted", true);
        if (img.name === "img3") formData.append("img3Deleted", true);
      }); // para luego despues poder reemplazar en la bd

      Object.keys(values).forEach((key) => {
        // agrego todo al formdata
        if (key !== "imagenes") {
          formData.append(key, values[key]);
        }
      });

      if (values?.imagenes) {
        // si viene alguna imagen la agregamos al form data
        formData.append("img", values?.imagenes);
      }

      try {
        const { data } = await clienteAxios.put(
          `products/update/${product.key}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setFileList([]);
        message.success(data.msg);
        form.resetFields();
        setModalEditOpen(false);
      } catch (error) {
        console.log(error);
      }
    };

    updateProducts();
  };

  const handleChange = async (idcategoria) => {
    form.setFieldsValue({
      idsubcategoria: "",
    }); // para reiniciar el select cada vez que cambio la categoria

    if (disable) setDisable(false);

    getSub(idcategoria);
  };

  const props = {
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";

      if (!isJpgOrPng)
        return message.error("Solo se acepta imagenes en formato JPG/PNG!");

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) return message.error("La imágen no puede superar los 2MB!");

      setFileList([...fileList, file]);
      return false; // retorno false para que no se suba de una la imagen
      // y se suba cuando haga la consulta a la bd en el onFinish
    },
    onRemove: (file) => {
      setImageDeleted([...imageDeleted, file]); // para saber que imagen elimino y poder reemplazar la img en la bd
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    onChange: ({ fileList: newFileList, file }) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJpgOrPng || !isLt2M) return false; // para que no los ponga en la filelist cuando no son png o jpg
      // o cuando se pasan del tamaño
      setFileList(newFileList);
    },
    maxCount: 1, // maximo 3 imagenes
    listType: "picture-card",
  };

  //TODO: se podria hacer que la api responda con esas dos propiedas asi no mapear las categorias
  const categoryData = categories.map((cat) => ({
    value: cat.idcategoria,
    label: cat.nombrecategoria,
  }));
  const onValuesChange = (values) => {
    if (valuesChanges) setValuesChanges(false);
  };
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      scrollToFirstError={true}
      form={form}
      onValuesChange={onValuesChange}
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

      <Form.Item label="Imágen" name="imagenes">
        <Upload fileList={fileList} {...props}>
          {fileList.length >= 1 ? null : ( // si ya se paso de 1 imgs que no muestre el boton para añadir otra img
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
        <Button
          htmlType="submit"
          className="text-white p-4 w-full bg-red-700 hover:bg-red-800 hover:text-white focus:text-white focus:bg-red-700 "
          disabled={valuesChanges}
        >
          Editar producto
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormProductEdit;
