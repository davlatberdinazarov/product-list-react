import React from 'react';
import './App.css';
import DesertCarts from './components/DesertCarts';
import Basket from './components/Basket';

export default function App() {
  return (
    <section class="container">
     
     <div>
      <DesertCarts/>
     </div>


      <div>
        <Basket/>
      </div>
      
    </section>
  )
}
