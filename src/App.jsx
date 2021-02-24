import React, {useRef, useState} from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import * as Calculator from './calculator';
import './App.css';

function App() {

  const [formula, setFormula] = useState([]);
  const [input, setInput] = ('0');
  const [afterCalculation, setAfterCalculation] = useState(false);
  const inputEl = useRef(null);

  const onClear = () => {
    console.log('limpou');
  }

  const onEqual = () => {
    console.log('igual');
  }

  const onDigit = ({ target }) => {
    console.log(inputEl.current);
    const digit = target.innerText;
    
    if(afterCalculation){
      setInput(digit);
      setAfterCalculation(false);
    }
    else if(input === '0') {
      setInput(digit);
    }
    else if(Calculator.isNotNumber(input)){
      setInput(digit);
      const newFormula = formula.concat(input)
      setFormula(newFormula);
    }
    else{
      const newInput = input.concat(digit);
      setInput(newInput);
    }
    console.log('digito');
  }

  const onOperator = () => {
    console.log();
  }

  const onBackspace = () => {
    console.log('apagou');
  }
  return (
    <div className="App">
      <h1>Calculadora Orc Muito Bolada</h1>
      <Display
        formula={formula}
        input={input}
        onBackspace={() => onBackspace()}
      />

      <Buttons 
        onClear={() => onClear()}
        onDigit={() => onDigit()}
        onEqual={() => onEqual()}
        onOperator={() => onOperator()}
        ref={inputEl}
      />
    </div>
  );
}

export default App;