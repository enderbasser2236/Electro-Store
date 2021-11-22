import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';
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
      <div className='divItemList ulItemList'>
        <a href={item.url} className='itemList btn btn-primary'>
          {item.texto}
        </a>
      </div>

      {data.length === 0 ? (
        <h1 className='charging'>Charging items...</h1>
      ) : (
        <ItemList itemRender={data} />
      )}
    </>
  );
};

export default ItemListContainer;
