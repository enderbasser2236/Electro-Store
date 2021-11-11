import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../ItemCounter/ItemCounter.css';

const ItemCounter = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <>
      <div className='ItemCounter'>
        <h1>Item-Count</h1>
        <h2>{counter}</h2>

        <button
          className='btn btn-primary'
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}>
          -1
        </button>
        <button
          className='btn btn-primary'
          onClick={() => {
            setCounter(initial);
          }}>
          Reset
        </button>
        <button
          className='btn btn-primary'
          onClick={() => {
            if (counter < stock) setCounter(counter + 1);
          }}>
          +1
        </button>
        <div>
          <button className='btn btn-primary' onClick={onAdd(counter)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

ItemCounter.propTypes = {
  initial: PropTypes.number.isRequired,
};

export default ItemCounter;
