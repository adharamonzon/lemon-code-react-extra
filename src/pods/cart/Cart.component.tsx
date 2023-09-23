import React from 'react';
import { SelectedAnimalsContext } from '../../core/providers/selectedAnimals.provider';
const cartIcon = require('../../assets/icons/cart.png');
const deleteIcon = require('../../assets/icons/delete.png');

export const CartComponent : React.FC = () => {
  const {animals, addNewAnimal} = React.useContext(SelectedAnimalsContext);
  return(
    <section className='cart'>
      <header className='cart--header'>
        <h1 className='cart--header__title'>Carrito</h1>
        <div className='cart--header__icon'>
          <img className='img' src={cartIcon} alt="" />
        </div>
      </header>
      <main className='cart--main'>
        <ul className='cart--list'>
          {animals.map((animal) => ( 
            <li className='cart--list__item' key={animal[0].id}>
              <div className='cart--list__header'>
                <p className='cart--list__name'>{animal[0].name}</p>
                <div className='cart--list__deleteIcon'>
                  <img className='img' src={deleteIcon} alt="Borrar" />
                </div>
              </div>
              <div className='cart--list__img' >
                <img className='img' src={animal[0].url} alt="Miniatura animal" />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}