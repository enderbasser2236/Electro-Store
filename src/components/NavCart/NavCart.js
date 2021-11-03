import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import '../NavCart/NavCart.css';

const NavCart = () => {
  return (
    <div className='shoppingCart'>
      <FaOpencart />
      <span>01</span>
    </div>
  );
};

export default NavCart;
