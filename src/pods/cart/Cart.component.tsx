import React from 'react';
import { SelectedAnimalsContext } from '../../core/providers/selectedAnimals.provider';
import { Pictures } from '../../shared/pictures.model';
const cartIcon = require('../../assets/icons/cart.png');
const deleteIcon = require('../../assets/icons/delete.png');

export const CartComponent : React.FC = () => {
  const {animals, addNewAnimal} = React.useContext(SelectedAnimalsContext);
  let animalsToRender = animals;

  const deleteItem = (data: Pictures) => {
    data.selected = false;
    animals.map((animal, i) => {
      if(animal.selected === false) {
        animals.splice(i, 1);
      }
    });
    addNewAnimal(animals);
    animalsToRender = animals;
  };

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
          {animalsToRender.map((animal) => (            
              <li className='cart--list__item' key={animal.id}>
                <div className='cart--list__header'>
                  <p className='cart--list__name'>{animal?.name}</p>
                  {animal.url ? 
                  <div className='cart--list__deleteIcon'>
                    <img className='img' onClick={() => {deleteItem(animal)}} src={deleteIcon} alt="Borrar" />
                  </div>
                  : <div></div>
                  }
                </div>
                {animal.url ? 
                  <div className='cart--list__img' >
                    <img className='img' src={animal.url} alt="Miniatura animal" />
                  </div>
                  : <div></div>
              }
              </li>
          ))}
        </ul>
      </main>
    </section>
  )
}