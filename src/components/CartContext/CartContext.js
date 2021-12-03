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
    let newItem = item;
    let itemInCart = carlist.find((item) => item.idProd === newItem.id);
    console.log(newItem);
    console.log(itemInCart);
    console.log(carlist);

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
    } else if (itemInCart.idprod === newItem.id) {
      alert('ya se encuentra el item en el carrito');
      console.log('porque no sirve?');
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
