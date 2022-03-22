import React, { useState } from 'react';

import '../ItemCounter/ItemCounter.css';

const ItemCounter = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const disminuirStock = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const aumentarStock = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const resetStock = () => {
    setCounter(initial);
  };

  return (
    <>
      <div className='ItemCounter'>
        <h4>{counter}</h4>

        <button
          className='btn  btn-outline-danger itemCounterBtn'
          onClick={disminuirStock}>
          -1
        </button>
        <button
          className='btn btn-outline-dark itemCounterBtn'
          onClick={resetStock}>
          Reset
        </button>
        <button
          className='btn btn-outline-warning itemCounterBtn'
          onClick={aumentarStock}>
          +1
        </button>
        <div>
          <button
            className='btn btn-outline-success itemCounterBtn'
            onClick={() => onAdd(counter)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCounter;
