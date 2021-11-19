import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';

const ItemListContainer = (item) => {
  return (
    <>
      <div className='divItemList ulItemList'>
        <a href={item.url} className='itemList btn btn-primary'>
          {item.texto}
        </a>
      </div>
      <ItemCounter initial={0} stock={10} />
      <ItemList />
    </>
  );
};

export default ItemListContainer;
