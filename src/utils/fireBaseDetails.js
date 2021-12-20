import { doc, getDoc } from 'firebase/firestore';
import db from './firebase';

const fireStoreFetchDetails = async (idItem) => {
  const docRef = doc(db, 'stockItems', idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }

  return docSnap;
};

export default fireStoreFetchDetails;
