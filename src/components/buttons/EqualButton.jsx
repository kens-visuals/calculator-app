import { ACTIONS } from '../../hooks/useCalc';

export default function DigitButton({ theme, dispatch }) {
  const btnTheme =
    theme === 'one'
      ? 'border-one-key-tertiary--shadow bg-one-key-tertiary'
      : theme === 'two'
      ? 'border-two-key-tertiary--shadow bg-two-key-tertiary'
      : 'border-three-key-tertiary--shadow bg-three-key-tertiary';
  const btnText =
    theme === 'one'
      ? 'text-one-text-primary'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const equalBtnStyle = `col-span-2 
  ${
    theme === 'one'
      ? '!text-white bg-one-key-secondary border-one-key-secondary--shadow'
      : theme === 'two'
      ? '!text-white bg-two-key-secondary border-two-key-secondary--shadow'
      : '!text-white bg-three-key-secondary border-three-key-secondary--shadow'
  }`;

  return (
    <button
      type="button"
      className={`button ${btnText} ${btnTheme} ${equalBtnStyle}`}
      onClick={() => dispatch({ type: ACTIONS.EVAL })}
    >
      =
    </button>
  );
}
