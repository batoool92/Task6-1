
import React, { useState } from 'react';
import './style.css';

function App() {

  const [value, setValue] = useState('');
 
  return (
  <div className='calculator-grid'>
    <div className='output'>{value}</div>
    <button onClick={e => setValue(value.slice(0,-1))}>C</button>
    <button onClick={e => setValue("")}>DEL</button>
    <button onClick={e => setValue(value + "/")}>/</button>
    <button onClick={e => setValue(value + "*")}>*</button>
    <button onClick={e => setValue(value + "7")}>7</button>
    <button onClick={e => setValue(value + "8")}>8</button>
    <button onClick={e => setValue(value + "9")}>9</button>
    <button onClick={e => setValue(value + "-")}>-</button>
    <button onClick={e => setValue(value + "4")}>4</button>
    <button onClick={e => setValue(value + "5")}>5</button>
    <button onClick={e => setValue(value + "6")}>6</button>
    <button onClick={e => setValue(value + "+")}>+</button>
    <button onClick={e => setValue(value + "1")}>1</button>
    <button onClick={e => setValue(value + "2")}>2</button>
    <button onClick={e => setValue(value + "3")}>3</button>
    <button onClick={e => setValue(eval(value))}  className='span-two-rows'>=</button>
    <button onClick={e => setValue(value + "0")} className='span-two'>0</button>
    <button onClick={e => setValue(value + ".")}>.</button>
  </div>  
  );
}

export default App;
