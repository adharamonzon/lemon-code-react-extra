import React from 'react';
import { Pictures } from '../../shared/pictures.model';

interface Props {
  children: React.ReactNode
}

interface Animal { 
  animals: Pictures[],
  addNewAnimal: (animals: Pictures | Pictures[]) => void;
}

export const SelectedAnimalsContext = React.createContext<Animal>({
  animals: [{name: '', url: '', id: 1, selected: true}],
  addNewAnimal: (animals) => {}
});


export const SelectedAnimalsProvider: React.FC<Props> = ({children}) => {
  const addNewAnimal = (animals) => {
    setAnimal((prevState) => [...prevState, animals])
  }
  const [animals, setAnimal] = React.useState([]);
  return (
    <SelectedAnimalsContext.Provider
      value={{animals, addNewAnimal}}>
      {children}
    </SelectedAnimalsContext.Provider>
  )
}