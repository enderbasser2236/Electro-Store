import React from 'react';
import { Link } from 'react-router-dom';
import '../Items/imgModal.css';

const itemsListRendering = ({ prod }) => {
  return (
    <div className='col-sm-4' style={{ padding: '20px' }}>
      <div className='card container' style={{ width: '20rem' }}>
        <img
          src={prod.img}
          className='card-img-top image'
          alt={prod.descripcion}></img>
        <Link to={`/item/${prod.id}`}>
          <div className='overlay'>Detalles.</div>
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{prod.descripcion}</h5>
        </div>
      </div>
    </div>
  );
};

export default itemsListRendering;
