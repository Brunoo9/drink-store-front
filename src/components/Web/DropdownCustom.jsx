import { Dropdown, Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAlert from "../../Hooks/useAlert";
const DropdownCustom = ({ visible }) => {
  const { openSuccess } = useAlert();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const onClickPanel = () => {
    navigate("/admin");
  };
  const onClick = () => {
    openSuccess("Se cerró sesión correctamente!");

    setTimeout(() => {
      window.location.reload(true);
      localStorage.removeItem("token");
      localStorage.removeItem("carrito");
    }, 600);
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
      <Button className="border-none text-white btn-user">
        Hola, {auth?.nombreusuario}
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownCustom;
