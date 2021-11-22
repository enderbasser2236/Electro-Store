import React from 'react';
import ItemDetailsRendering from '../Items/ItemDetailsRendering';

const ItemList = ({ itemRender }) => {
  const stockId1 = itemRender.filter((p) => p.id === 2);

  const stockList = stockId1.map((prod) => (
    <ItemDetailsRendering key={prod.id} prod={prod} />
  ));

  return <div className='row itemContainer'>{stockList}</div>;
};

export default ItemList;
