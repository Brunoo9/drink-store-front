/* react-router-dom */
import { Link, useNavigate, Navigate } from "react-router-dom";

/* ant design  */
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Alert, Form, Input } from "antd";
import clienteAxios from "../../config/clienteAxios";
import useAuth from "../../Hooks/useAuth";
const LoginForm = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const onFinish = (values) => {
    const userLogin = async () => {
      try {
        const { data } = await clienteAxios.post("/users/login", values);

        localStorage.setItem("token", data.jwt);
        navigate("/");
        window.location.reload(true);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

    userLogin();
  };
  return (
    <>
      {!auth?.idusuario ? (
        <Form
          name="normal_login"
          className="bg-white"
          initialValues={{
            remember: true,
          }}
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "El email es requerido" },
              {
                type: "email",
                message: "No es un email válido",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Correo electrónico"
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "La contraseña es requerida" },
                {
                  min: 6,
                  message: "La contraseña debe tener minimo 6 caracteres",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Contraseña"
                className="rounded-md"
              />
            </Form.Item>

            {/* <Link className="login-form-forgot" to="#">
          Olvidé la contraseña
      </Link> */}
          </Form.Item>
          <Alert message="Admin: Admin, Password: adminpw" type="info" />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full border-red-500 bg-red-500 uppercase hover:bg-red-400 hover:border-red-400 rounded-md mt-4"
            >
              Iniciar sesión
            </Button>
          </Form.Item>
          <div className="w-full flex items-center justify-center gap-1 mb-2">
            <p>¿No tienes Cuenta? </p>
            <Link
              to="/register"
              className="font-bold text-red-500 hover:text-red-600"
            >
              Regístrate
            </Link>
          </div>
        </Form>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default LoginForm;
