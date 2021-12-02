import React from 'react';
import ItemDetailsRendering from '../Items/ItemDetailsRendering';

const ItemList = ({ itemRender }) => {
  return <ItemDetailsRendering item={itemRender} />;
};

export default ItemList;
