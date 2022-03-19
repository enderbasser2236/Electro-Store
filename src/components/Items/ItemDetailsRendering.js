import React from 'react';
import { useState, useContext } from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import Swal from 'sweetalert2';

const ItemDetailsRendering = ({ item }) => {
  const [counterData, setCounterData] = useState(0);
  const context = useContext(CartContext);

  const addedToCart = (qty) => {
    Swal.fire({
      text: 'agregando ' + qty + ' items al carrito',
      icon: 'success',
      width: '20%',
      background: 'ligthgray',
      timer: 3000,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
    });
  };

  const onAdd = (qty) => {
    addedToCart(qty);
    setCounterData(qty);
    context.addToCart(item, qty);
  };

  return (
    <>
      <div className='row'>
        <div className='col-lg-6 align-items-start imgDetail'>
          <img
            className='imgDetailInside'
            src={item.img}
            alt={item.descripcion}></img>
        </div>
        <div className='col-lg-6 align-items-start textDetail'>
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
              <>
                <ItemCounter onAdd={onAdd} initial={0} stock={10} />
                <Link to='/cart'>
                  <button className='btn btn-danger endBuy'>
                    Finalizar Compra
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsRendering;
