import { useState } from "react";
import { Avatar, Button, List, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import UserList from "../../components/Admin/Users/UserList";
import UserCreate from "../../components/Admin/Users/UserCreate";
const AdminUsers = () => {
  const [userCreateModal, setUserCreateModal] = useState(false);

  return (
    <>
      <section className="section-users">
        <div>
          <div className="contenedor-button">
            <Tooltip title="Añadir usuario">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setUserCreateModal(true);
                }}
              >
                Añadir
              </Button>
            </Tooltip>
          </div>

          <div>
            <UserList />
          </div>
        </div>
      </section>
      <UserCreate
        userCreateModal={userCreateModal}
        setUserCreateModal={setUserCreateModal}
      />
    </>
  );
};

export default AdminUsers;
