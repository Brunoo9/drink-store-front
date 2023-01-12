import { createContext, useState, useEffect } from "react";
const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productsInLS = localStorage.getItem("carrito");
      return productsInLS ? JSON.parse(productsInLS) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (item) => item?.idproducto === product?.idproducto
    );
    if (!inCart) {
      return setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }

    setCartItems(
      cartItems.map((item) => {
        if (item?.idproducto === product?.idproducto) {
          return { ...inCart, cantidad: inCart.cantidad + 1 };
        } else return item;
      })
    );
  };

  const deleteItemToCart = (product) => {
    if (product.cantidad > 1) {
      const newCart = cartItems.map((item) => {
        if (item.idproducto === product.idproducto) {
          return { ...item, cantidad: item.cantidad - 1 };
        } else return item;
      });
      setCartItems(newCart);
      return;
    }
    const newCart = cartItems.filter(
      (item) => item.idproducto !== product.idproducto
    );
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        addItemToCart,
        cartItems,
        setCartItems,
        deleteItemToCart,
        clearCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoProvider };

export default CarritoContext;
