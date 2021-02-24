import React, {useState} from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import * as Calculator from './calculator';
import './App.css';

function App() {

  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      setResult(eval(result) || "") + ""
    } catch (e) {
      setResult("error");
    }
  }

  const reset = () => {
    setResult('');
  }

  const onClick = button => {
    if(button === '='){
      calculate();
    }
    else if(button === 'CLEAR'){
      reset();
    }
    else {
      var resultado = result + button;
      setResult(resultado); 
    }
  }

  return (
    <div className="App">
      <h1>Calculadora Orc Muito Bolada</h1>
      <div className="overlay"></div>
      <Display result={result} />
      <Buttons onClick={onClick}
      />
    </div>
  );
}

export default App;