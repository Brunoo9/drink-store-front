import React from "react";
import { Avatar, Button, List, Tooltip, Modal, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import clienteAxios from "../../../config/clienteAxios";
import UserEdit from "./UserEdit";

const UserList = () => {
  const [fillUsers, setFillUsers] = useState([]);
  const [userModalEdit, setUserModalEdit] = useState(false);
  const [user, setUser] = useState({});
  const { confirm } = Modal;
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await clienteAxios("/users/getadmins");
        setFillUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

  const handleEdit = (item) => {
    setUserModalEdit(true);
    setUser(item);
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
        dataSource={fillUsers}
        bordered={true}
        renderItem={(item) => {
          const { nombreusuario, rol, email } = item;
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
                title={
                  <p>
                    {`${nombreusuario}  `}
                    <Tag color={rol.idrol === 1 ? "red" : "green"}>
                      {rol.nombrerol}
                    </Tag>
                  </p>
                }
                description={`${email}`}
              />
            </List.Item>
          );
        }}
      />
      <UserEdit
        setUserModalEdit={setUserModalEdit}
        userModalEdit={userModalEdit}
        user={user}
      />
    </>
  );
};

export default UserList;
