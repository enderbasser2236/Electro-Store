import React from 'react';
import '../ItemDetail/ItemDetail.css';
import ItemDetails from '../ItemDetail/ItemDetails';
import { useEffect, useState } from 'react';
import itemRendering from '../promesa/promesa';
import { useParams } from 'react-router';
import stockItems from '../stock/stock';

const ItemDetailsContainer = () => {
  const [data, setData] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    itemRendering(stockItems.find((item) => item.id === parseInt(idItem)))
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  });

  return <ItemDetails itemRender={data} />;
};

export default ItemDetailsContainer;
