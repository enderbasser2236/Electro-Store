import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carlist, setCarlist] = useState([]);

  const alreadyExist = () => {
    Swal.fire({
      text: 'el producto se encuentra en el carrito se sumara a la cantidad actual',
      icon: 'warning',
      width: '20%',
      background: 'ligthgray',
      backdrop: true,
      timer: 4000,
      showConfirmButton: false,
    });
  };

  const totalItemsCart = () => {
    let qtys = carlist.map((item) => item.qtyProd);
    return qtys.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const deleteItem = (itemId) => {
    let refreshCart = carlist.filter((item) => itemId !== item.idProd);
    setCarlist(refreshCart);
  };

  const clearCart = () => {
    setCarlist([]);
  };

  const calcTotalPerItem = (itemId) => {
    let index = carlist.map((item) => item.idProd).indexOf(itemId);

    return carlist[index].priceProd * carlist[index].qtyProd;
  };

  const calcTotal = () => {
    let totalPerItem = carlist.map((item) => calcTotalPerItem(item.idProd));
    return totalPerItem.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
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
      alreadyExist();
      itemInCart.qtyProd += qty;
      setCarlist([...carlist]);
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
          totalItemsCart,
          calcTotalPerItem,
          calcTotal,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
