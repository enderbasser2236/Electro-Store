import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import '../Cart/Cart.css';
import CartRendering from './CartRendering';
import { Link } from 'react-router-dom';
import OrderSumary from './OrderSumary';

const Cart = () => {
  const context = useContext(CartContext);
  const cartItems = context.carlist;
  const cartRendering = cartItems.map((items) => (
    <CartRendering key={items.idProd} items={items} />
  ));

  return cartItems.length > 0 ? (
    <>
      <div className='cartDiv'>
        <ol>{cartRendering}</ol>
      </div>
      <OrderSumary />

      <div className='cartClear'>
        <button
          className='btn btn-danger'
          onClick={() => {
            context.clearCart();
          }}>
          Vaciar Carrito
        </button>
      </div>
    </>
  ) : (
    <>
      <h1 className='emptyCart'>Su carrito esta vacio</h1>
      <div className='emptyCartButton'>
        <Link to='/'>
          <button className=' btn btn-outline-primary'>
            Regresar al inicio
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;