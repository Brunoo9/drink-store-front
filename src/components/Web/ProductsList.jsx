import { Col, Row, Button, Image, message } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import useCarrito from "../../Hooks/useCarrito";
import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  const { addItemToCart } = useCarrito();

  const handleButton = (e, product) => {
    addItemToCart(product);
    message.success("Producto agregado al carrito");
  };
  return (
    <Row gutter={[12, 26]} justify="center" className="xs:px-4 sm:px-10 py-2">
      {products.map((product) => (
        <Col xs={16} sm={12} md={8} lg={8} xl={6} key={product?.key}>
          <div className="flex flex-col shadow-xl hover:shadow-gray-600 transition-shadow duration-300 hover:cursor-pointer border-b-4 border-red-500 ">
            <div className="bg-white">
              <Image
                src={product?.img1}
                width={"auto"}
                height={200}
                preview={false}
              />
            </div>

            <div className="p-2  bg-slate-100 ">
              <h1 className="text-center text-base mb-2 ">
                {product?.nombreproducto}
              </h1>

              <p className="text-center md:text-base font-bold mb-4 text-black">
                ARS$ {product?.precio}
              </p>

              <div className="flex justify-center items-center gap-x-2 h-full">
                <Link
                  className=" flex justify-center gap-2 items-center p-2 h-full border-none  rounded-sm hover:bg-transparent hover:text-red-500  focus:bg-transparent focus:text-red-500 w-full transition duration-800"
                  icon={<EyeOutlined />}
                  to={`/productos/${product.key}`}
                >
                  <EyeOutlined />
                  Ver
                </Link>

                <Button
                  className=" p-2 h-full border-none  rounded-sm hover:bg-transparent hover:text-red-500  focus:bg-transparent focus:text-red-500 w-full transition duration-800"
                  icon={<ShoppingCartOutlined />}
                  onClick={(e) => handleButton(e, product)}
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
