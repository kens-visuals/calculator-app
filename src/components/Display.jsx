import React from 'react';

// helpers
import { formatOperand } from '../helpers';

export default function Display({
  theme,
  currOperand,
  prevOperand,
  operation,
}) {
  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const calcedText =
    theme === 'one'
      ? 'border-one-key-primary text-one-key-secondary'
      : theme === 'two'
      ? 'border-two-key-primary text-two-key-secondary'
      : 'border-three-key-primary text-three-key-secondary';

  const bgTertiary = `${
    theme === 'one'
      ? 'bg-one-bg-tertiary'
      : theme === 'two'
      ? 'bg-two-bg-tertiary'
      : 'bg-three-bg-tertiary'
  }`;

  return (
    <div
      className={`grid w-full grid-rows-[1.5rem_1fr] content-center gap-2 overflow-y-hidden overflow-x-scroll rounded-xl p-6 text-right md:gap-4 md:p-8 ${bgTertiary}`}
    >
      <div className={`w-full rounded-sm border-b-2 ${calcedText}`}>
        <span>
          {formatOperand(prevOperand)} {operation} {formatOperand(currOperand)}
        </span>
      </div>

      <span className={`text-4xl md:text-6xl ${text}`}>
        {formatOperand(currOperand) || <span>&nbsp;</span>}
      </span>
    </div>
  );
}
