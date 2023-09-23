import React from 'react';
import { Pictures } from '../../shared/pictures.model';

interface Props {
  pictures: Pictures[]
}

export const ListComponent : React.FC<Props> = (props) => {
  const {pictures} = props;
  return (
    <ul className='list'>
       {pictures.map((picture) => (
          <li className='list--item' key={picture.id} >
             <h2 className='list--item__title'>{picture.title}</h2>
             <div className='list--item__imgContainer'>
              <img className='img' src={picture.url} alt="picture photo" />
             </div>
          </li>
          ))}
    </ul>
  )
}