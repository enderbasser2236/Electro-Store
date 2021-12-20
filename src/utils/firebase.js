// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpcftAVBQNfRWw7yvMa960thw2gW6TDgc',
  authDomain: 'electro-store-57747.firebaseapp.com',
  projectId: 'electro-store-57747',
  storageBucket: 'electro-store-57747.appspot.com',
  messagingSenderId: '398142137589',
  appId: '1:398142137589:web:37000d974703244c4d51bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
