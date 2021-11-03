import React from 'react';
import '../ItemList/Item.css';

const ItemList = (item) => {
  return (
    <div className='divItemList'>
      <a href={item.url} className='itemList btn btn-primary'>
        {item.texto}
      </a>
    </div>
  );
};

export default ItemList;
