import React from 'react';
import '../ItemListContainer/ItemListContainer.css';

const ItemList = (item) => {
  return (
    <div className='divItemList ulItemList'>
      <a href={item.url} className='itemList btn btn-primary'>
        {item.texto}
      </a>
    </div>
  );
};

export default ItemList;
