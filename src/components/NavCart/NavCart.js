import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import '../NavCart/NavCart.css';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const NavCart = () => {
  const context = useContext(CartContext);

  return (
    <div className='shoppingCart'>
      <FaOpencart />

      <span>{context.totalItemsCart()}</span>
    </div>
  );
};

export default NavCart;
