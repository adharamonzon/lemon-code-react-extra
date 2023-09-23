import React from "react";
import { Header } from "./layout/Header";
import { ListScene } from './scenes/list';
import { CartScene } from "./scenes/cart";
const data = require('./core/api/data.json');

export const App = () => {
  return (
    <>
      <Header />
      <main className="home">
        <ListScene  pictures={data.cats}/>
        <CartScene />
      </main>
    </>
  );
};
