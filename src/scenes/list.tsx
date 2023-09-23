import React from 'react';
import { Pictures } from '../shared/pictures.model';
import { ListComponent } from '../pods/list/List.component';

interface Props {
  pictures: Pictures[]
}
export const ListScene : React.FC<Props> = (props) => {
  const {pictures} = props;
  return (
    <ListComponent  pictures={pictures}/>
  )
}