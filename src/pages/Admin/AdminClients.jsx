import { useState } from "react";
import { Avatar, Button, List, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ClientList from "../../components/Admin/Customers/ClientList";
const AdminClients = () => {
  const [userCreateModal, setUserCreateModal] = useState(false);

  return (
    <>
      <section className="section-users">
        <div>
          <div className="contenedor-button"></div>

          <div>
            <ClientList />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminClients;
