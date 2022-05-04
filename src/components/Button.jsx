import React from 'react';

export default function Button({
  theme,
  children,
  setNum,
  equal,
  otherStyle,
  del,
}) {
  const text =
    theme === 'one'
      ? 'text-one-text-primary'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const btnStyle = `text-lg uppercase ${del || 'col-span-2'}
    ${
      theme === 'one'
        ? '!text-white bg-one-key-primary border-one-key-primary--shadow'
        : theme === 'two'
        ? '!text-white bg-two-key-primary border-two-key-primary--shadow'
        : '!text-white bg-three-key-primary border-three-key-primary--shadow'
    }`;

  const equalBtnStyle = `text-lg col-span-2
    ${
      theme === 'one'
        ? '!text-white bg-one-key-secondary border-one-key-secondary--shadow'
        : theme === 'two'
        ? '!text-white bg-two-key-secondary border-two-key-secondary--shadow'
        : '!text-black bg-three-key-secondary border-three-key-secondary--shadow'
    }`;

  return (
    <button
      onClick={(e) => setNum((prevNum) => prevNum + e.target.textContent)}
      className={`rounded-md border-b-4 pt-2 text-4xl ${text} 
      ${otherStyle && btnStyle}
      ${equal && equalBtnStyle} ${
        theme === 'one'
          ? 'border-one-key-tertiary--shadow bg-one-key-tertiary'
          : theme === 'two'
          ? 'border-two-key-tertiary--shadow bg-two-key-tertiary'
          : 'border-three-key-tertiary--shadow bg-three-key-tertiary'
      }`}
    >
      {children}
    </button>
  );
}
