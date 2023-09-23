import React from 'react';
const cartIcon = require('../assets/icons/cart.png'); 

export const CartScene : React.FC = () => {

  return (
    <>
      <h1>Carrito</h1>
      <div>
        <img src={cartIcon} alt="" />
      </div>
    </>
  )
}