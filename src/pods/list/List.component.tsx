import React from 'react';
import { Pictures } from '../../shared/pictures.model';
import { SelectedAnimalsContext } from '../../core/providers/selectedAnimals.provider';

interface Props {
  pictures: Pictures[]
}

export const ListComponent : React.FC<Props> = (props) => {
  const {pictures} = props;
  const animalsSelected: Pictures[] = []; 
  const {animals, addNewAnimal} = React.useContext(SelectedAnimalsContext);

  const addSelectedPhoto = (data: Pictures) => {
    data.selected = true;
    animalsSelected.push(data);
    animalsSelected.forEach((animal) => {
      addNewAnimal(Array(animal))
    })
  }

  return (
    <ul className='list'>
       {pictures.map((picture) => (
          <li className='list--item' key={picture.id} onClick={() => addSelectedPhoto(picture)}>
             <h2 className='list--item__title'>{picture.title}</h2>
             <div className='list--item__imgContainer'>
              <img className='img' src={picture.url} alt="picture photo" />
             </div>
          </li>
          ))}
    </ul>
  )
}