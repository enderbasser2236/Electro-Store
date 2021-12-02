import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carlist, setCarlist] = useState([]);

  const addToCart = (item, qty) => {
    setCarlist([
      ...carlist,
      {
        idProd: item.id,
        imgProd: item.img,
        nameProd: item.descripcion,
        qtyProd: qty,
      },
    ]);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          carlist,
          addToCart,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
