import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import itemRendering from '../promesa/promesa';
import stockItems from '../stock/stock';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    itemRendering(
      stockItems.filter((item) => {
        if (idCategory === undefined) return item;
        else {
          return item.idCategoria === idCategory;
        }
      })
    )
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return <ItemList itemRender={data} />;
};

export default ItemListContainer;
