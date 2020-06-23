import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes={
  buttonFunctions: PropTypes.func.isRequired,
}

function Numpad(props) {
  const {buttonFunctions} = props;
  return (
    <div>
      <div>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.eraseInput()}
        >
          AC
        </button> 
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.changePole()}
        >
          +/-
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.moduleValues()}
        >
          %
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.divideValues()}
        >
          /
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(7)}
        >
          7
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(8)}
        >
          8
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(9)}
        >
          9
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.multiplyValues()}
        >
          X
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(4)}
        >
          4
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(5)}
        >
          5
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(6)}
        >
          6
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.subtractValues()}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(1)}
        >
          1
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(2)}
        >
          2
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput(3)}
        >
          3
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={() => buttonFunctions.addValues()}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="button--rowspan-2"
          type="button"
          onClick={() => buttonFunctions.numberToInput(0)}
        >
          0
        </button>
        <button
          className="button"
          type="button"
          onClick={() => buttonFunctions.numberToInput('.')}
        >
          .
        </button>
        <button
          className="button--orange button--bottomRightRadius"
          type="button"
          onClick={() => buttonFunctions.equal()}
        >
          =
        </button>
      </div>
    </div>
  );
}
Numpad.propTypes = propTypes;

export default Numpad;
