import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import '../Cart/Cart.css';
import CartRendering from './CartRendering';

const Cart = () => {
  const context = useContext(CartContext);
  const cartItems = context.carlist;
  const cartRendering = cartItems.map((items) => (
    <CartRendering key={items.idProd} items={items} />
  ));

  return (
    <>
      <div className='cartDiv'>
        <ol>{cartRendering}</ol>
      </div>
      <div className='cartClear'>
        <button
          className='btn btn-success'
          onClick={() => {
            context.clearCart();
          }}>
          Vaciar
        </button>
      </div>
    </>
  );
};

export default Cart;
