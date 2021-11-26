import React from 'react';
import ItemDetailsRendering from '../Items/ItemDetailsRendering';

const ItemList = ({ itemRender }) => {
  return <ItemDetailsRendering prod={itemRender} />;
};

export default ItemList;
