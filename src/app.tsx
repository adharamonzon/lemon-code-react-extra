import React from "react";
import { Header } from "./layout/Header";
import { ListScene } from './scenes/list';
import { CartScene } from "./scenes/cart";
import { SelectedAnimalsProvider } from "./core/providers/selectedAnimals.provider";
const data = require('./core/api/data.json');

export const App = () => {
  return (
    <SelectedAnimalsProvider>
      <Header />
      <main className="home">
        <ListScene  pictures={data.cats}/>
        <CartScene />
      </main>
    </SelectedAnimalsProvider>
  );
};
