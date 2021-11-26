import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
const ItemDetailsRendering = ({ prod }) => {
  return (
    <>
      <div className='itemDetailSizeLeft'>
        <img src={prod.img} alt={prod.descripcion}></img>
      </div>
      <div className='itemDetailSizeRight'>
        <div>
          <h5>{prod.descripcion}</h5>
        </div>
        <ul className='list-group-flush'>
          <li className='list-group-item'>
            <strong>Marca: {prod.marca}</strong>
          </li>
          <li className='list-group-item'>
            <strong>Modelo: {prod.modelo}</strong>
          </li>
          <li className='list-group-item'>
            <strong>Precio: {prod.precio}</strong>
          </li>
          <ItemCounter initial={0} stock={10} />
        </ul>
      </div>
    </>
  );
};

export default ItemDetailsRendering;
