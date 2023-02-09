import { Dropdown, Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const DropdownCustom = ({ visible }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const onClickPanel = () => {
    navigate("/admin");
  };
  const onClick = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
    navigate("/");
    //TODO: AGREGAR ALERTA DE QUE SE DESLOGUEO CORRECTAMENTE
  };

  const items = [
    auth?.rol?.nombrerol === "ADMIN"
      ? {
          key: "1",
          label: <p onClick={onClickPanel}>Panel Admin</p>,
        }
      : null,
    {
      key: "2",
      label: <p onClick={onClick}>Cerrar sesión</p>,
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger="click"
      placement="bottom"
      className={`${visible}`}
    >
      <Button className=" border-none text-white btn-user">
        Hola, {auth?.nombreusuario}
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownCustom;
