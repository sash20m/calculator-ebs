import React, { useState, useCallback } from 'react';
import Numpad from '../molecules/Numpad';
import ValueInput from '../atoms/inputs/valueInput/ValueInput';
import './styles/Calculator.scss';


function Calculator(){

  const [inputValue, setInputValue] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState(null);

  const numberToInput = useCallback((event) => {

    const number = event.target.name;

    if (operator === 'previous+') {
      setFirstValue(inputValue);
      setInputValue(number);
      setOperator('+');
    } else if (operator === 'previous-') {
      setFirstValue(inputValue);
      setInputValue(number);
      setOperator('-');
    } else if (operator === 'previous/') {
      setFirstValue(inputValue);
      setInputValue(number);
      setOperator('/');
    } else if (operator === 'previous*') {
      setFirstValue(inputValue);
      setInputValue(number);
      setOperator('*');
    } else if (operator === 'previous%') {
      setFirstValue(inputValue);
      setInputValue(number);
       setOperator('%');
    } else setInputValue(`${inputValue}${number}`);

  },[inputValue, operator]);

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
        if (Number.isNaN(solution)) {
          eraseInput(); 
        } else setInputValue(solution);

      } else if (operator === '-') {

        const solution = firstValue - parseFloat(inputValue, 10);
        if (Number.isNaN(solution)) {
          eraseInput(); 
        } else setInputValue(solution);
        
      } else if (operator === '*') {

        const solution = firstValue * parseFloat(inputValue, 10);
        if (Number.isNaN(solution)) {
          eraseInput(); 
        } else setInputValue(solution);

      } else if (operator === '/') {

        const solution = firstValue / parseFloat(inputValue, 10);
        if (Number.isNaN(solution)) {
           eraseInput(); 
        } else setInputValue(solution);

      } else if (operator === '%') {
        
        const solution = firstValue % parseFloat(inputValue, 10);
        if (Number.isNaN(solution)) {
          eraseInput(); 
       } else setInputValue(solution);

      } else setOperator(null);

  };

  const addValues = () => {

    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      setOperator('+');
    } else if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      setOperator('previous+');
    } else equal();
    
  };

  const multiplyValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      setOperator('*');
    } else if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      setOperator('previous*');
    } else
    equal();
    
  };

  const subtractValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      setOperator('-');
    } else if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      setOperator('previous-');
    } else equal();
    
  };

  const moduleValues = () => {
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      setOperator('%');
    } else if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      setOperator('previous%');
    } else equal();
    
  };

  const divideValues = () => {
      
    if (operator === null) {
      setFirstValue(parseFloat(inputValue, 10));
      setInputValue('');
      setOperator('/');
    } else if (
      operator === '+' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/' ||
      operator === '%'
    ) {
      equal();
      setOperator('previous/');
    } else equal();
    
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