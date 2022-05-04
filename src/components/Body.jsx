// hooks
import useCalc from '../hooks/useCalc';

// components
import DigitButton from './buttons/DigitButton';
import OperationButton from './buttons/OperationButton';
import DeleteButton from './buttons/DeleteButton';
import ResetButton from './buttons/ResetButton';
import EqualButton from './buttons/EqualButton';

// helpers
import { formatOperand } from '../helpers';

export default function Body({ theme }) {
  const { currOperand, prevOperand, operation, dispatch } = useCalc();

  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const bgSecondary = `${
    theme === 'one'
      ? 'bg-one-bg-secondary'
      : theme === 'two'
      ? 'bg-two-bg-secondary'
      : 'bg-three-bg-secondary'
  }`;

  const bgTertiary = `${
    theme === 'one'
      ? 'bg-one-bg-tertiary'
      : theme === 'two'
      ? 'bg-two-bg-tertiary'
      : 'bg-three-bg-tertiary'
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
        ${text} ${bgTertiary}`}
      >
        {/* NOTE: Fix the design*/}
        <div className={`w-full bg-white text-red-500`}>
          <span>
            {formatOperand(prevOperand)} {operation}
          </span>
        </div>
        <span>{formatOperand(currOperand)}</span>
      </div>

      <div
        className={`grid grid-cols-4 grid-rows-layout content-center gap-3 rounded-lg px-6 py-3 ${bgSecondary}`}
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

        <DeleteButton dispatch={dispatch} theme={theme} />

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

        <ResetButton dispatch={dispatch} theme={theme} />

        <EqualButton dispatch={dispatch} theme={theme} />
      </div>
    </>
  );
}
