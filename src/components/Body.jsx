// hooks
import useCalc from '../hooks/useCalc';

// components
import Display from './Display';
import DigitButton from './buttons/DigitButton';
import OperationButton from './buttons/OperationButton';
import DeleteButton from './buttons/DeleteButton';
import ResetButton from './buttons/ResetButton';
import EqualButton from './buttons/EqualButton';

export default function Body({ theme }) {
  const { currOperand, prevOperand, operation, dispatch } = useCalc();

  const bgSecondary = `${
    theme === 'one'
      ? 'bg-one-bg-secondary'
      : theme === 'two'
      ? 'bg-two-bg-secondary'
      : 'bg-three-bg-secondary'
  }`;

  return (
    <>
      <Display
        theme={theme}
        currOperand={currOperand}
        prevOperand={prevOperand}
        operation={operation}
      />

      <div
        className={`grid grid-cols-4 grid-rows-layout-1 content-evenly gap-3 rounded-xl p-6 md:gap-6 md:p-8 ${bgSecondary}`}
      >
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
        <OperationButton
          dispatch={dispatch}
          operation="*"
          sign="x"
          theme={theme}
        />

        <ResetButton dispatch={dispatch} theme={theme} />

        <EqualButton dispatch={dispatch} theme={theme} />
      </div>
    </>
  );
}
