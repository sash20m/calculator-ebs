import React, { useState } from 'react';
import './calculator.scss';

function Calculator() {
  // state
  const [inputValue, setInputValue] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState(null);


  const numberToInput = (number) => {

    if (operator === 'previous+') {
      setFirstValue(inputValue);
      setInputValue(number);
      return setOperator('+');
    }
    
    if (operator === 'previous-') {
      setFirstValue(inputValue);
      setInputValue(number);
      return setOperator('-');
    }
    
    if (operator === 'previous/') {
      setFirstValue(inputValue);
      setInputValue(number);
      return setOperator('/');
    }
    
    if (operator === 'previous*') {
      setFirstValue(inputValue);
      setInputValue(number);
      return setOperator('*');
    } 
    
    if (operator === 'previous%') {
      setFirstValue(inputValue);
      setInputValue(number);
      return setOperator('%');
    } 
    
    return setInputValue(`${inputValue}${number}`);
  };

  const eraseInput = () => {
    setInputValue('');
    setOperator(null);
    setFirstValue('');
  };

  const changePole = () => {
    const newNumber = parseFloat(inputValue, 10);
    setInputValue(newNumber * -1);
  };

  const equal = () => {

    if (operator === '+') {
      const solution = parseFloat(inputValue, 10) + firstValue;
      return setInputValue(solution);
    }

    if (operator === '-') {
      return setInputValue(firstValue - parseFloat(inputValue, 10));
    } 

    if (operator === '*') {
      return setInputValue(firstValue * parseFloat(inputValue, 10));
    } 

    if (operator === '/') {
      return setInputValue(firstValue / parseFloat(inputValue, 10));
    } 
    
    if (operator === '%') {
      return setInputValue(firstValue % parseFloat(inputValue, 10));
    }

    return setOperator(null);
  };

  const addValues = () => {

    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      return setOperator('+');
    }
    
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      return setOperator('previous+');
    } 

    return equal();
    
  };

  const multiplyValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      return setOperator('*');
    } 
    
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      return setOperator('previous*');
    } 
    
    return equal();
    
  };

  const subtractValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      return setOperator('-');
    } 
    
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      return setOperator('previous-');
    } 
    
    return equal();
    
  };

  const moduleValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      return setOperator('%');
    } 
    
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      return setOperator('previous%');
    } 
    
    return equal();
    
  };

  const divideValues = () => {
      
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      return setOperator('/');
    }  
    
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      return setOperator('previous/');
    } 
    
    return equal();
    
  };

  return (
    <div className="calculator">
      <div className="calculator-content">
        <input className="calculator__input" value={inputValue} />
        <div>
          <div>
            <button className="calculator__button--orange" type="button" onClick={() => eraseInput()}>
              AC
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => changePole()}>
              +/-
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => moduleValues()}>
              %
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => divideValues()}>
              /
            </button>
          </div>
          <div>
            <button className="calculator__button" type="button" onClick={() => numberToInput(7)}>
              7
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(8)}>
              8
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(9)}>
              9
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => multiplyValues()}>
              X
            </button>
          </div>
          <div>
            <button className="calculator__button" type="button" onClick={() => numberToInput(4)}>
              4
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(5)}>
              5
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(6)}>
              6
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => subtractValues()}>
              -
            </button>
          </div>
          <div>
            <button className="calculator__button" type="button" onClick={() => numberToInput(1)}>
              1
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(2)}>
              2
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput(3)}>
              3
            </button>
            <button className="calculator__button--orange" type="button" onClick={() => addValues()}>
              +
            </button>
          </div>
          <div>
            <button className="calculator__button--rowspan-2" type="button" onClick={() => numberToInput(0)}>
              0
            </button>
            <button className="calculator__button" type="button" onClick={() => numberToInput('.')}>
              .
            </button>
            <button className="calculator__button--orange calculator__button--bottomRightRadius" type="button" onClick={() => equal()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
