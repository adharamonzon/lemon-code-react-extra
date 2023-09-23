import React from 'react';
import { SelectedAnimalsContext } from '../core/providers/selectedAnimals.provider';
const pawsIcon = require('../assets/icons/paws.png');
const cartIcon = require('../assets/icons/cart.png');

export const Header = () => {
  const {animals, addNewAnimal} = React.useContext(SelectedAnimalsContext);

  return (
    <nav className='nav'>
      <div className='nav--info'>
        <div className='nav--info__imgContainer'>
          <img src={pawsIcon} className='img' alt="paws icon" />
        </div>
        <div>
          <h1 className='nav--title'>Cats and Dogs App</h1>
          <h3>Select the pictures you want to buy to add them to the cart</h3>
        </div>
        <div className='nav--info__imgContainer'>
          <img src={pawsIcon} className='img' alt="paws icon" />
        </div>
      </div>
      <div className='nav--menu'>
        <section >
          <ul className='nav--list'>
            <li className='nav--list__item'>
              <button className='nav--list__btn' type="button">Cats</button>
            </li>
            <li className='nav--list__item'>
              <button className='nav--list__btn' type="button">Dogs</button>
            </li>
          </ul>
        </section>
        <section className='cart'>
          <div className='cart--imgContainer'>
            <img className='img' src={cartIcon} alt="cart icon" />
          </div>
          <p className='cart--number'>{animals.length}</p> 
        </section>
      </div>
    </nav>
  )
}