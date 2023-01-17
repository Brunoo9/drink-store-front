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
  const [subTotal, setSubTotal] = useState(() => {
    try {
      const productsInLS = localStorage.getItem("carrito");
      if (!productsInLS) {
        return 0;
      }
      return JSON.parse(productsInLS).reduce(
        (total, product) => total + product.total,
        0
      );
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
      const cartNew = [
        ...cartItems,
        { ...product, cantidad: 1, total: product.precio },
      ];
      setCartItems(cartNew);
      updateSubTotal(cartNew);
      return;
    }
    const newCart = cartItems.map((item) => {
      if (item?.idproducto === product?.idproducto) {
        return {
          ...inCart,
          cantidad: inCart.cantidad + 1,
          total: inCart.precio * (inCart.cantidad + 1),
        };
      } else return item;
    });
    setCartItems(newCart);
    updateSubTotal(newCart);
  };

  const deleteItemToCart = (product) => {
    // if (product.cantidad > 1) {
    //   const newCart = cartItems.map((item) => {
    //     if (item.idproducto === product.idproducto) {
    //       return { ...item, cantidad: item.cantidad - 1 };
    //     } else return item;
    //   });
    //   setCartItems(newCart);
    //   return;
    // }
    // const newCart = cartItems.filter(
    //   (item) => item.idproducto !== product.idproducto
    // );
    // setCartItems(newCart);

    const newCart = cartItems.filter(
      (item) => item.idproducto !== product.idproducto
    );
    setCartItems(newCart);
    updateSubTotal(newCart);
  };

  const updateSubTotal = (cart = null) => {
    if (!cart) {
      updateSubTotal(0);
    }
    const subTotalUpdated = cart.reduce(
      (total, product) => total + product.total,
      0
    );
    setSubTotal(subTotalUpdated);
  };
  const clearCart = () => {
    setCartItems([]);
    updateSubTotal([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        addItemToCart,
        cartItems,
        setCartItems,
        deleteItemToCart,
        clearCart,
        subTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoProvider };

export default CarritoContext;
