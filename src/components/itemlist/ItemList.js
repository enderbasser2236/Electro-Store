import React from 'react';
import ItemsListRendering from '../Items/ItemsListRendering';

const ItemList = ({ itemRender }) => {
  const stockList = itemRender.map((prod) => (
    <ItemsListRendering key={prod.id} prod={prod} />
  ));

  return <ol className='itemListRendering'>{stockList}</ol>;
};

export default ItemList;
