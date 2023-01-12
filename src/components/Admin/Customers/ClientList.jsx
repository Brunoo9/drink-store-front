import { Avatar, Button, List, Tooltip, Modal, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import clienteAxios from "../../../config/clienteAxios";
import ClientEdit from "./ClientEdit";

// TERMINAR LA PARTE DE CLIENTE-> CONTROLADOR CON LAS CONSULTAS Y TERMINAR EL COMPONENTE DE MOSTRAR LOS CLIENTES
const ClientList = () => {
  const [fillClients, setFillClients] = useState([]);
  const [clientModalEdit, setclientModalEdit] = useState(false);
  const [client, setclient] = useState({});
  const { confirm } = Modal;

  useEffect(() => {
    const getclients = async () => {
      try {
        const { data } = await clienteAxios("/clients/getall");
        setFillClients(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getclients();
  }, []);

  const handleEdit = (item) => {
    setclientModalEdit(true);
    setclient(item);
  };

  const showConfirm = (item) => {
    confirm({
      title: "Estás seguro que deseas Eliminar este usuario?",
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        // Eliminar el paciente
        try {
          // await clienteAxios.put(`/pacients/delete/${record.key}`);
          //*TODO: FALTA LOS MENSAJES DE EXITO CUANDO SE ELIMINA EL usuario */
        } catch (error) {
          console.log(error);
        }
      },

      onCancel() {},
    });
  };
  return (
    <>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={fillClients}
        bordered={true}
        renderItem={(item) => {
          const {
            nombrecliente,
            apellidocliente,
            usuario: { email },
          } = item;
          return (
            <List.Item
              actions={[
                <Tooltip title="Editar">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => {
                      handleEdit(item);
                    }}
                  />
                </Tooltip>,
                <Tooltip title="Eliminar">
                  <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => {
                      showConfirm(item);
                    }}
                  />
                </Tooltip>,
              ]}
              style={{ borderBottomColor: "rgba(0,0,0,.06)" }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar shape="square" size={64} icon={<UserOutlined />} />
                }
                title={<p>{`${apellidocliente}, ${nombrecliente} `}</p>}
                description={email}
              />
            </List.Item>
          );
        }}
      />
      <ClientEdit
        setclientModalEdit={setclientModalEdit}
        clientModalEdit={clientModalEdit}
        client={client}
      />
    </>
  );
};

export default ClientList;
