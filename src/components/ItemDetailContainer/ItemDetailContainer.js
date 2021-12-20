import React from 'react';
import '../ItemDetail/ItemDetail.css';
import ItemDetails from '../ItemDetail/ItemDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fireStoreFetchDetails from '../../utils/fireBaseDetails';

const ItemDetailsContainer = () => {
  const [data, setData] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    fireStoreFetchDetails(idItem)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetails itemRender={data} />;
};

export default ItemDetailsContainer;
