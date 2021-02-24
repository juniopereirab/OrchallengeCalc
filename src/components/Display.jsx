import React from 'react';
import './Display.css';

function Display(props) {

    const onTextareaChange = () => {}
  return (
      <div className="display-toolbar">
          <form className="display">
              <textarea className="display-formula" onChange={onTextareaChange} value={props.formula.join("")}/>
              <textarea className="display-input" id="display" rows="1" onChange={onTextareaChange} value={props.input}/>
          </form>
          <button className="backspace" onClick={props.onBackspace}>Backspace</button>
      </div>
  );
}

export default Display;