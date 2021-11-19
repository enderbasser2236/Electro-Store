import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';
import stockItems from '../stock/stock';

const is_ok = true;

let itemRendering = (task, time) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(task);
      }, time);
    } else {
      reject('error');
    }
  });
};

const ItemListContainer = (item) => {
  const [data, setData] = useState();

  useEffect(() => {
    itemRendering(stockItems, 5000).then(() => {
      setData(data);
    });
  });

  return (
    <>
      <div className='divItemList ulItemList'>
        <a href={item.url} className='itemList btn btn-primary'>
          {item.texto}
        </a>
      </div>
      <ItemCounter initial={0} stock={10} />
      <ItemList itemRender={data} />
    </>
  );
};

export default ItemListContainer;
