import React from 'react';
import Items from '../Items/Items';
import stockItems from '../stock/stock';

const ItemList = () => {
  const stockList = stockItems.map((prod) => (
    <Items key={prod.id} prod={prod} />
  ));

  return <div className='row'>{stockList}</div>;
};

export default ItemList;
