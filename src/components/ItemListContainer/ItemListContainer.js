import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';
import stockItems from '../stock/stock';
import ItemsCharging from '../Items/ItemsCharging';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    itemRendering(console.log('starting rendering'), 3000).then(() => {
      itemRendering(setData(stockItems), 3000);
    });
    console.log(data);
  });

  return (
    <>
      <div className='divItemList ulItemList'>
        <a href={item.url} className='itemList btn btn-primary'>
          {item.texto}
        </a>
      </div>
      <ItemCounter initial={0} stock={10} />

      {data.length === 0 ? <ItemsCharging /> : <ItemList itemRender={data} />}
      {/* <ItemList itemRender={stockItems} /> */}
    </>
  );
};

export default ItemListContainer;
