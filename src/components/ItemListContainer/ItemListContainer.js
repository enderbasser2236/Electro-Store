import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fireStoreFetch from '../../utils/fireStoreFetch';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    fireStoreFetch(idCategory)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return <ItemList itemRender={data} />;
};

export default ItemListContainer;
