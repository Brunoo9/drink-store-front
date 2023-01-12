import logo from "../../assets/logo.png";
import { Image, Divider } from "antd";
import RegisterForm from "../../components/Web/RegisterForm";

const WebRegister = () => {
  return (
    <div className="flex items-center justify-center m-12">
      <div className="bg-white px-6 pb-2 rounded-xl w-full md:w-3/6 lg:4/6">
        <div className="flex flex-col items-center justify-center">
          <Image width={150} src={logo} preview={false} />
          <h1 className="uppercase font-black text-2xl">
            Crear{" "}
            <span className="font-black text-2xl text-red-500 uppercase">
              Cuenta
            </span>
          </h1>
        </div>
        <Divider />
        <RegisterForm />
      </div>
    </div>
  );
};

export default WebRegister;
