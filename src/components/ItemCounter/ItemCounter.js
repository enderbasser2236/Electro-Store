import React, { useState } from 'react';
import '../ItemCounter/ItemCounter.css';

const ItemCounter = ({ stock, initial }) => {
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

  const addToCart = () => {
    console.log('i am under construcction right now');
  };

  return (
    <>
      <div className='ItemCounter'>
        <h4>{counter}</h4>

        <button className='btn btn-primary' onClick={disminuirStock}>
          -1
        </button>
        <button className='btn btn-primary' onClick={resetStock}>
          Reset
        </button>
        <button className='btn btn-primary' onClick={aumentarStock}>
          +1
        </button>
        <div>
          <button className='btn btn-primary' onClick={addToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCounter;
