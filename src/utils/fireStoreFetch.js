import db from '../utils/firebase';
import { query, orderBy, collection, getDocs, where } from 'firebase/firestore';

const fireStoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, 'stockItems'),
      where('idCategoria', '==', idCategory)
    );
  } else {
    q = query(collection(db, 'stockItems'), orderBy('categoria'));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFireStore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFireStore;
};

export default fireStoreFetch;
