import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carlist, setCarlist] = useState([]);

  const deleteItem = (itemId) => {
    let refreshCart = carlist.filter((item) => itemId !== item.idProd);
    setCarlist(refreshCart);
  };

  const clearCart = () => {
    setCarlist([]);
  };

  const addToCart = (item, qty) => {
    const itemInCart = carlist.find((prod) => prod.idProd === item.id);
    if (itemInCart === undefined) {
      setCarlist([
        ...carlist,
        {
          idProd: item.id,
          imgProd: item.img,
          nameProd: item.descripcion,
          brandProd: item.marca,
          modelProd: item.modelo,
          priceProd: item.precio,
          qtyProd: qty,
        },
      ]);
    } else {
      alert(
        'el producto se encuentra en el carrito se sumara a la cantidad actual'
      );
      itemInCart.qtyProd += qty;
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{
          carlist,
          addToCart,
          clearCart,
          deleteItem,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
