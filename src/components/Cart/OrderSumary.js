import React from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import '../Cart/Cart.css';
import { collection, doc, setDoc } from 'firebase/firestore';
import db from '../../utils/firebase';

const OrderSumary = () => {
  const context = useContext(CartContext);
  const total = context.calcTotal();

  const createOrder = () => {
    let order = {
      buyer: {
        name: 'peter parker',
        email: 'yourfriendlyneighbordhood@gmail.com',
        telefono: '123456789',
      },

      items: context.carlist.map((item) => ({
        id: item.idProd,
        title: item.nameProd,
        price: item.priceProd,
        qty: item.qtyProd,
      })),

      total: total,
    };

    const setNewOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, 'orders'));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    setNewOrderFirestore()
      .then((result) => alert('su orden de compra es: ' + result.id))
      .catch((err) => console.log(err));

    context.clearCart();
  };

  return (
    <div className='col-md-3  containerOrder'>
      <div className='cartOrder'>
        <h3>Resumen de su Orden</h3>
        <p>
          <strong>Subtotal:</strong>
          <br></br>
          {context.calcTotal()}
        </p>
        <p>
          <strong>Shipping: </strong>
          FREE!!
        </p>
        <p>
          <strong>TOTAL: </strong>
          <br></br>
          {context.calcTotal()}
        </p>
        <div>
          <button className='btn btn-warning checkOut' onClick={createOrder}>
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSumary;
