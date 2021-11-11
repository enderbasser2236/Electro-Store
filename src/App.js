import React from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';
import { shoppingCart } from './components/NavCart/NavCart';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='greeting' url='al-link- 1' />
      <ItemCounter
        initial={0}
        stock={10}
        onAdd={(item) => {
          shoppingCart.push(item);
        }}
      />
    </>
  );
}

export default App;
