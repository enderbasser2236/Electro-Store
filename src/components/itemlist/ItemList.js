import React from 'react';
import ItemsListRendering from '../Items/ItemsListRendering';

const ItemList = ({ itemRender }) => {
  const stockList = itemRender.map((prod) => (
    <ItemsListRendering key={prod.id} id={itemRender.id} prod={prod} />
  ));

  return stockList.length > 0 ? (
    <ol className='row item'>{stockList}</ol>
  ) : (
    <h1>Cargando...</h1>
  );
};

export default ItemList;
