import React from 'react';
import { useState, useContext } from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const ItemDetailsRendering = ({ item }) => {
  const [counterData, setCounterData] = useState(0);
  const context = useContext(CartContext);

  const onAdd = (qty) => {
    alert('agregando ' + qty + ' items al carrito');
    setCounterData(qty);
    context.addToCart(item, qty);
  };

  return (
    <>
      <div className='itemDetailSizeLeft'>
        <img src={item.img} alt={item.descripcion}></img>
      </div>
      <div className='itemDetailSizeRight'>
        <div>
          <h5>{item.descripcion}</h5>
        </div>
        <ul className='list-group-flush'>
          <li className='list-group-item'>
            <strong>Marca: {item.marca}</strong>
          </li>
          <li className='list-group-item'>
            <strong>Modelo: {item.modelo}</strong>
          </li>
          <li className='list-group-item'>
            <strong>Precio: {item.precio}</strong>
          </li>
          {counterData === 0 ? (
            <ItemCounter onAdd={onAdd} initial={0} stock={10} />
          ) : (
            <Link to='/cart'>
              <button className='btn btn-danger checkout'>
                Finalizar Compra
              </button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default ItemDetailsRendering;
