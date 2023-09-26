import React from 'react';
const pawsIcon = require('../assets/icons/paws.png');

interface Props {
  setAnimals : (data: string) => void,
}
export const Header: React.FC<Props> = (props) => {
  
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
              <button className='nav--list__btn' type="button" onClick={() => props.setAnimals('cats')}>Cats</button>
            </li>
            <li className='nav--list__item'>
              <button className='nav--list__btn' type="button" onClick={() => props.setAnimals('dogs')}>Dogs</button>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  )
}