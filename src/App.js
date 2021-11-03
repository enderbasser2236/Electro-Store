import React from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemList from './components/ItemList/Item';
import '../src/components/ItemList/Item.css';

function App() {
  return (
    <>
      <NavBar />
      <ul className='ulItemList'>
        <ItemList texto='item-1' url='al-link- 1' />
        <ItemList texto='item-2' url='al-link- 2' />
        <ItemList texto='item-3' url='al-link- 3' />
        <ItemList texto='item-4' url='al-link- 4' />
        <ItemList texto='item-5' url='al-link- 5' />
      </ul>
    </>
  );
}

export default App;
