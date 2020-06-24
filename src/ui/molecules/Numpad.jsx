import React from 'react';
import PropTypes, { func } from 'prop-types';
import './Numpad.scss';

const propTypes = {
  buttonFunctions: PropTypes.shape({
    eraseInput: func.isRequired,
    numberToInput: func.isRequired,
    changePole: func.isRequired,
    moduleValues: func.isRequired,
    divideValues: func.isRequired,
    equal: func.isRequired,
    subtractValues: func.isRequired,
    addValues: func.isRequired,
    multiplyValues: func.isRequired,
  }).isRequired,
};

function Numpad(props) {
  const { buttonFunctions } = props;

  return (
    <div>
      <div>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.eraseInput}
        >
          AC
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.changePole}
        >
          +/-
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.moduleValues}
        >
          %
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.divideValues}
        >
          /
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          name="7"
          onClick={buttonFunctions.numberToInput}
        >
          7
        </button>
        <button
          className="button"
          type="button"
          name="8"
          onClick={buttonFunctions.numberToInput}
        >
          8
        </button>
        <button
          className="button"
          type="button"
          name="9"
          onClick={buttonFunctions.numberToInput}
        >
          9
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.multiplyValues}
        >
          X
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          name="4"
          onClick={buttonFunctions.numberToInput}
        >
          4
        </button>
        <button
          className="button"
          type="button"
          name="5"
          onClick={buttonFunctions.numberToInput}
        >
          5
        </button>
        <button
          className="button"
          type="button"
          name="6"
          onClick={buttonFunctions.numberToInput}
        >
          6
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.subtractValues}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="button"
          type="button"
          name="1"
          onClick={buttonFunctions.numberToInput}
        >
          1
        </button>
        <button
          className="button"
          type="button"
          name="2"
          onClick={buttonFunctions.numberToInput}
        >
          2
        </button>
        <button
          className="button"
          type="button"
          name="3"
          onClick={buttonFunctions.numberToInput}
        >
          3
        </button>
        <button
          className="button--orange"
          type="button"
          onClick={buttonFunctions.addValues}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="button--rowspan-2"
          type="button"
          name="0"
          onClick={buttonFunctions.numberToInput}
        >
          0
        </button>
        <button
          className="button"
          type="button"
          name="."
          onClick={buttonFunctions.numberToInput}
        >
          .
        </button>
        <button
          className="button--orange button--bottomRightRadius"
          type="button"
          onClick={buttonFunctions.equal}
        >
          =
        </button>
      </div>
    </div>
  );
}
Numpad.propTypes = propTypes;

export default Numpad;
