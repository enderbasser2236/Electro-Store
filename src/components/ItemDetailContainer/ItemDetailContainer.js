import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemDetails from '../ItemDetail/ItemDetails';
import { useEffect, useState } from 'react';
import stockItems from '../stock/stock';
import itemRendering from '../promesa/promesa';
import { useParams } from 'react-router';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    itemRendering(
      stockItems.find((item) => item.id === parseInt(idItem)),
      3000
    )
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  });

  return <ItemDetails itemRender={data} />;
};

export default ItemListContainer;
