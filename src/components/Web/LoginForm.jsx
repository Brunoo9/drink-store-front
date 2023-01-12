/* react-router-dom */
import { Link } from "react-router-dom";

/* ant design  */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Alert, Form, Input, Divider } from "antd";

const LoginForm = () => {
  return (
    <Form
      name="normal_login"
      className="bg-white"
      initialValues={{
        remember: true,
      }}
      size="large"
      // onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "El nombre de usuario es requerido" },
          {
            min: 3,
            message: "El nombre de usuario debe tener minimo 3 caracteres",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Nombre de usuario"
          className="rounded-md"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "La contraseña es requerida" },
            { min: 6, message: "La contraseña debe tener minimo 6 caracteres" },
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
  );
};

export default LoginForm;
