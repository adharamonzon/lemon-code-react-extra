import React from "react";
import { Header } from "./layout/Header";
import { ListScene } from './scenes/list';
import { CartScene } from "./scenes/cart";
import { SelectedAnimalsProvider } from "./core/providers/selectedAnimals.provider";
const dataJson = require('./core/api/data.json');

export const App = () => {
  const [data, setData] = React.useState([]);

  const setAnimals = (animal: string)  => {
    if (animal === 'cats') {
      setData(dataJson.cats)
    } else {
      setData(dataJson.dogs)
    }
  }

  return (
    <SelectedAnimalsProvider>
      <Header setAnimals={setAnimals}/>
      <main className="home">
        <ListScene  pictures={data}/>
        <CartScene />
      </main>
    </SelectedAnimalsProvider>
  );
};
