import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
const root = ReactDOM.createRoot(document.getElementById('root'));
const mani=ReactDOM.createRoot(document.getElementById('mani'))

const myArray=['apple','banana','orange'];
const mylist=myArray.map((item)=><p>{item}</p>)
mani.render(mylist,document.getElementById('root'));

root.render(
  <StrictMode>
    <Hello/>
    <App/>
  </StrictMode>
);
