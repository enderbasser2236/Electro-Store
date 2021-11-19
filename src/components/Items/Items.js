import React from 'react';

const items = ({ prod }) => {
  return (
    <div className='col-sm-4' style={{ padding: '20px' }}>
      <div className='card' style={{ width: '20rem' }}>
        <img
          src={prod.img}
          className='card-img-top'
          alt={prod.descripcion}></img>
        <div className='card-body'>
          <h5 className='card-title'>{prod.descripcion}</h5>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Marca: {prod.marca}</li>
          <li className='list-group-item'>Modelo: {prod.modelo}</li>
          <li className='list-group-item'>Precio: {prod.precio}</li>
        </ul>
      </div>
    </div>
  );
};

export default items;
