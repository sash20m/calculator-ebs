import React, { useState } from 'react';
import Numpad from '../Molecules/Numpad'
import ValueInput from '../atoms/Inputs/ValueInput/ValueInput';


function Calculator(){

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

  const buttonFunctions = {
    eraseInput,
    numberToInput, 
    changePole, 
    moduleValues, 
    divideValues, 
    equal, 
    subtractValues, 
    addValues, 
    multiplyValues
  }

    return (
      <div className="calculator-content">
        <ValueInput inputValue={inputValue} />
        <Numpad buttonFunctions={buttonFunctions} />
      </div>
    )
}

export default Calculator;