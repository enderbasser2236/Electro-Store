import React from 'react';
import '../Cart/Cart.css';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartRendering = ({ items }) => {
  const context = useContext(CartContext);

  return (
    <li>
      <img className='cartImg' src={items.imgProd} alt={items.nameProd}></img>
      <div className='prodName'>
        <p>{items.nameProd}</p>
      </div>
      <div>
        <p>
          <strong>precio: </strong>
          {items.priceProd}
        </p>
      </div>
      <div>
        <p>
          <strong>cantidad: </strong>
          {items.qtyProd}
        </p>
      </div>
      <div>
        <button
          className='btn btn-danger'
          onClick={() => {
            context.deleteItem(items.idProd);
          }}>
          X
        </button>
      </div>
    </li>
  );
};

export default CartRendering;
