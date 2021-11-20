import React from 'react';
import Items from '../Items/Items';

const ItemList = (props) => {
  const stockList = props.itemRender.map((prod) => (
    <Items key={prod.id} prod={prod} />
  ));

  return <div className='row'>{stockList}</div>;
};

export default ItemList;
