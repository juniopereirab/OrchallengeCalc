import React from 'react';
import './Display.css';

function Display(props) {

    let {result} = props;
    
  return (
      <div className="result">
          <p>{result}</p>
      </div>
  );
}

export default Display;