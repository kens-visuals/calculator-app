import { ACTIONS } from '../../hooks/useCalc';

export default function DigitButton({ theme, dispatch, digit }) {
  const btnTheme =
    theme === 'one'
      ? 'border-one-key-tertiary--shadow bg-one-key-tertiary lg:hover:bg-one-key-tertiary--shadow'
      : theme === 'two'
      ? 'border-two-key-tertiary--shadow bg-two-key-tertiary lg:hover:bg-two-key-tertiary--shadow'
      : 'border-three-key-tertiary--shadow bg-three-key-tertiary lg:hover:bg-three-key-tertiary--shadow';

  const btnText =
    theme === 'one'
      ? 'text-one-text-primary'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  return (
    <button
      type="button"
      className={`button ${btnText} ${btnTheme}`}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
