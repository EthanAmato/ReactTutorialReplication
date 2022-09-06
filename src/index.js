import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Components/ButtonComponent';
import ConditionalStyle from './Components/ConditionalStyle'
import TextCounter from './Components/TextCounter'

const root = ReactDOM.createRoot(document.getElementById('root2'));
const buttonRoot = ReactDOM.createRoot(document.getElementById('buttonRoot'));
const randomRoot = ReactDOM.createRoot(document.getElementById("randomNum"));



const render = () => {
  document.getElementById('root').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;
  
  root.render(React.createElement(
    'div',
    null,
    'Hello React',
    React.createElement('input', null),
    React.createElement('pre', null, new Date().toLocaleTimeString())
    ));

    randomRoot.render(
      [<div>
        Random Number from 1-100: { Math.floor(Math.random() * 100) }
      </div>, <div>Randomly Colored: <ConditionalStyle/></div>,
         <TextCounter/>]  //demonstrates rendering multiple components via array
    );

    
};



setInterval(render, 1000);
let interval = ["+1","+5","+10"]
buttonRoot.render(
  [<Button clickAction = {interval} clickValue = {[1,5,10]}/>]
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals