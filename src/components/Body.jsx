import { useReducer } from 'react';

// components
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATOR: 'choose-operator',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete',
  EVAL: 'eval',
};

function evaluation({ currOperand, prevOperand, operation }) {
  let computation = '';
  const prev = parseFloat(prevOperand);
  const curr = parseFloat(currOperand);

  if (isNaN(prev) || isNaN(curr)) return '';

  // eslint-disable-next-line default-case
  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '/':
      computation = prev / curr;
      break;
    // default:
    //   return '';
  }

  return computation.toString();
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currOperand === '0') return state;
      if (
        payload.digit === '.' &&
        state.currOperand &&
        state.currOperand.includes('.')
      ) {
        return state;
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ''}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currOperand == null && state.prevOperand == null) return state;

      if (state.currOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        };
      }

      return {
        ...state,
        prevOperand: evaluation(state),
        operation: payload.operation,
        currOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVAL:
      if (
        state.operation == null ||
        state.currOperand == null ||
        state.prevOperand == null
      )
        return state;

      return {
        ...state,
        overwrite: true,
        operation: null,
        prevOperand: null,
        currOperand: evaluation(state),
      };

    default:
      return state;
  }
}

export default function Body({ theme }) {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  console.log(currOperand, prevOperand, operation);

  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const btnTheme = `${
    theme === 'one'
      ? 'border-one-key-tertiary--shadow bg-one-key-tertiary'
      : theme === 'two'
      ? 'border-two-key-tertiary--shadow bg-two-key-tertiary'
      : 'border-three-key-tertiary--shadow bg-three-key-tertiary'
  }`;

  const btnText =
    theme === 'one'
      ? 'text-one-text-primary'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const btnStyle = `text-lg uppercase 
    ${
      theme === 'one'
        ? '!text-white bg-one-key-primary border-one-key-primary--shadow'
        : theme === 'two'
        ? '!text-white bg-two-key-primary border-two-key-primary--shadow'
        : '!text-white bg-three-key-primary border-three-key-primary--shadow'
    }`;

  const equalBtnStyle = `col-span-2 
    ${
      theme === 'one'
        ? '!text-white bg-one-key-secondary border-one-key-secondary--shadow'
        : theme === 'two'
        ? '!text-white bg-two-key-secondary border-two-key-secondary--shadow'
        : '!text-white bg-three-key-secondary border-three-key-secondary--shadow'
    }`;

  // NOTE: Version 2
  // const btnsNumbers = [7, 4, 1, 8, 5, 2, 9, 6, 3];

  // const btnsNumbersDisplay = btnsNumbers.map((item, index) => (
  //   <button
  //     key={index}

  //     className={`button ${btnText} ${btnTheme}`}
  //   >
  //     {item}
  //   </button>
  // ));

  return (
    <>
      <div
        className={`w-full overflow-y-hidden overflow-x-scroll rounded-lg p-6 text-right text-4xl 
        ${text} ${
          theme === 'one'
            ? 'bg-one-bg-tertiary'
            : theme === 'two'
            ? 'bg-two-bg-tertiary'
            : 'bg-three-bg-tertiary'
        }`}
      >
        {/* NOTE: */}
        <div className={`w-full bg-white text-red-500`}>
          <span>
            {prevOperand} {operation}
          </span>
        </div>
        <span>{currOperand}</span>
      </div>

      <div
        className={`grid grid-cols-4 grid-rows-layout content-center gap-3 rounded-lg px-6 py-3 ${
          theme === 'one'
            ? 'bg-one-bg-secondary'
            : theme === 'two'
            ? 'bg-two-bg-secondary'
            : 'bg-three-bg-secondary'
        }`}
      >
        {/* NOTE: Version 2 */}
        {/* <div className="col-span-4 grid grid-flow-col grid-cols-4 grid-rows-layout-1 gap-3">
       {btnsNumbersDisplay}
       <button className={`button ${(btnText, btnTheme, btnStyle)}`}>
         Del
       </button>
       <button className={`button 'col-span-2' ${(btnText, btnTheme)}`}>
         +
       </button>
       <button className={`button 'col-span-2' ${(btnText, btnTheme)}`}>
         -
       </button>
      </div> */}

        <DigitButton dispatch={dispatch} digit="7" theme={theme} />
        <DigitButton dispatch={dispatch} digit="8" theme={theme} />
        <DigitButton dispatch={dispatch} digit="9" theme={theme} />

        <OperationButton
          del
          dispatch={dispatch}
          operation="Del"
          theme={theme}
        />

        <DigitButton dispatch={dispatch} digit="4" theme={theme} />
        <DigitButton dispatch={dispatch} digit="5" theme={theme} />
        <DigitButton dispatch={dispatch} digit="6" theme={theme} />

        <OperationButton dispatch={dispatch} operation="+" theme={theme} />

        <DigitButton dispatch={dispatch} digit="1" theme={theme} />
        <DigitButton dispatch={dispatch} digit="2" theme={theme} />
        <DigitButton dispatch={dispatch} digit="3" theme={theme} />

        <OperationButton dispatch={dispatch} operation="-" theme={theme} />

        <DigitButton dispatch={dispatch} digit="." theme={theme} />
        <DigitButton dispatch={dispatch} digit="0" theme={theme} />

        <OperationButton dispatch={dispatch} operation="/" theme={theme} />
        <OperationButton dispatch={dispatch} operation="*" theme={theme} />

        <button
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          className={`button col-span-2 ${btnText} ${btnTheme} ${btnStyle}`}
        >
          Reset
        </button>

        <button
          onClick={() => dispatch({ type: ACTIONS.EVAL })}
          className={`button  ${btnText} ${btnTheme} ${equalBtnStyle}`}
        >
          =
        </button>
      </div>
    </>
  );
}
