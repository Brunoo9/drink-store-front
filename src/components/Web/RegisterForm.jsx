/* react-router-dom */
import { Link } from "react-router-dom";

/* ant design  */
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  MailFilled,
} from "@ant-design/icons";
import { Button, Alert, Form, Input } from "antd";

const RegisterForm = () => {
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
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Campo obligatorio" },
          { min: 6, message: "La contraseña debe tener minimo 6 caracteres" },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Contraseña"
        />
      </Form.Item>

      <Form.Item
        name="repeatPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Campo obligatorio!" },
          { min: 6, message: "La contraseña debe tener minimo 6 caracteres" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("Las contraseñas no coinciden"));
            },
          }),
        ]}
        hasFeedback // para que aparezca el tip verde cuando esta todo ok
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Repetir contraseña"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full border-red-500 bg-red-500 uppercase hover:bg-red-400 hover:border-red-400 rounded-md mt-4"
        >
          Crear
        </Button>
      </Form.Item>
      <div className="w-full flex items-center justify-center gap-1 mb-2">
        <p>¿Ya tienes Cuenta? </p>
        <Link
          to="/login"
          className="font-bold text-red-500 hover:text-red-600 "
        >
          Inicia Sesión
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
