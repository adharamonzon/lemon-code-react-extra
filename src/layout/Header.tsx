import React from 'react';
const pawsIcon = require('../assets/icons/paws.png');

export const Header = () => {
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
          <p>Cart: 0</p> 
        </section>
      </div>
    </nav>
  )
}