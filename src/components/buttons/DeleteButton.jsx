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

  const btnStyle = `text-lg md:text-2xl uppercase 
  ${
    theme === 'one'
      ? '!text-white bg-one-key-primary border-one-key-primary--shadow lg:hover:bg-one-key-primary--shadow'
      : theme === 'two'
      ? '!text-white bg-two-key-primary border-two-key-primary--shadow lg:hover:bg-two-key-primary--shadow'
      : '!text-white bg-three-key-primary border-three-key-primary--shadow lg:hover:bg-three-key-primary--shadow'
  }`;

  return (
    <button
      type="button"
      className={`button ${btnText} ${btnTheme} ${btnStyle}`}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      Del
    </button>
  );
}
