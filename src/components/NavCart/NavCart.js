import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import '../NavCart/NavCart.css';

export const shoppingCart = [];

const NavCart = (initial) => {
  return (
    <div className='shoppingCart'>
      <FaOpencart />
      <span>0</span>
    </div>
  );
};

export default NavCart;
