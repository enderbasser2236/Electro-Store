import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemDetails from '../ItemDetail/ItemDetails';
import { useEffect, useState } from 'react';
import stockItems from '../stock/stock';
import itemRendering from '../promesa/promesa';

const ItemListContainer = (item) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    itemRendering()
      .then(() => {
        setData(stockItems);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      {data.length === 0 ? (
        <h1 className='charging'>Charging items...</h1>
      ) : (
        <ItemDetails itemRender={data} />
      )}
    </>
  );
};

export default ItemListContainer;
