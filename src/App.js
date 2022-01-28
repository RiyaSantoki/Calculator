import React from 'react';
import {useState,useEffect,useRef} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result + e.target.name);
  }

  function backspace(){
    setResult(result.slice(0, result.length -1))
  }

  function clear(){
    setResult("");
  }
  function calculate(){
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }

  }

  
  return (
    <div id="calc">
        <div id="screen">History + Numbers lol
          <input id="temp" type="text"value={result} ref={inputRef} />
        </div>
        <div id="buttons">
          <button id="percent" className="btn-pad btn-first-row btn-op" name='%'>%</button>
          <button id="sqroot" className="btn-pad btn-first-row btn-op" name='√' >√</button>
          <button id="square" className="btn-pad btn-first-row btn-op" name='' >𝒙<sup>2</sup></button>
          <button id="inverse" className="btn-pad btn-first-row btn-op" name='' ><sup>1</sup>/<sub>𝒙</sub></button>
          <button /* onclick="clear()" */id='clear' className="btn-pad btn-main btn-other" onClick={clear}>CE</button>
          <button /* onclick="backspace()" */ className="btn-pad btn-main btn-other" onClick={backspace}>C</button>
          <button /* onclick="backspace()" */id='backspace' className="btn-pad btn-main btn-other" onClick={backspace} >⌫</button>
          <button id="divide" className="btn-pad btn-main btn-op" name='/' onClick={handleClick}>÷</button>
          <button className="btn-pad btn-main btn-num" name='7' onClick={handleClick}>7</button>
          <button className="btn-pad btn-main btn-num" name='8' onClick={handleClick}>8</button>
          <button className="btn-pad btn-main btn-num" name='9' onClick={handleClick}>9</button>
          <button id="multiply" className="btn-pad btn-main btn-op" name='*' onClick={handleClick}>×</button>
          <button className="btn-pad btn-main btn-num" name='4' onClick={handleClick}>4</button>
          <button className="btn-pad btn-main btn-num" name='5' onClick={handleClick}>5</button>
          <button className="btn-pad btn-main btn-num" name='6' onClick={handleClick}>6</button>
          <button id="subs" className="btn-pad btn-main btn-op" name='-' onClick={handleClick}>−</button>
          <button className="btn-pad btn-main btn-num" name='1' onClick={handleClick}>1</button>
          <button className="btn-pad btn-main btn-num" name='2' onClick={handleClick}>2</button>
          <button className="btn-pad btn-main btn-num" name='3' onClick={handleClick}>3</button>
          <button id="sum" className="btn-pad btn-main btn-op" name='+' onClick={handleClick}>+</button>
          <button className="btn-pad btn-main btn-whatfuckingever" onClick={handleClick}>±</button>
          <button className="btn-pad btn-main btn-num" name='0' onClick={handleClick}>0</button>
          <button className="btn-pad btn-main btn-num" name='.' onClick={handleClick}>.</button>
          <button id="result" className="btn-pad btn-main btn-op" onClick={calculate}>=</button>
        </div>
      </div>
  );
}

export default App;
