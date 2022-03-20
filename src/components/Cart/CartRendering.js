import React from 'react';
import '../Cart/Cart.css';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartRendering = ({ items }) => {
  const context = useContext(CartContext);

  return (
    <div className='cartList'>
      <li>
        <img className='cartImg' src={items.imgProd} alt={items.nameProd}></img>
        <div className='prodName'>
          <p>{items.nameProd}</p>
        </div>
        <div>
          <strong>cantidad: </strong>
          {items.qtyProd}
        </div>
        <div>
          <strong>Precio: </strong>
          {items.priceProd}
        </div>
        <div>
          <strong>Total: </strong>
          {context.calcTotalPerItem(items.idProd)}
        </div>
        <div>
          <button
            className='btn btn-outline-danger'
            onClick={() => {
              context.deleteItem(items.idProd);
            }}>
            Quitar
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartRendering;
