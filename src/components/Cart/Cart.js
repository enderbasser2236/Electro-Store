import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const Cart = () => {
  const context = useContext(CartContext);
  console.log(context);
  const cartItems = context.map((item) => (
    <img src={item.img} alt={item.descripcion}></img>
  ));

  return <div>{cartItems}</div>;
};

export default Cart;
