import { useState } from 'react';

// components
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('one');

  // DEL
  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  return (
    <div
      className={`grid min-h-screen grid-rows-[1fr_auto] py-20 font-spartan  ${
        theme === 'one'
          ? 'bg-one-bg-primary'
          : theme === 'two'
          ? 'bg-two-bg-primary'
          : 'bg-three-bg-primary'
      }`}
    >
      <div className="mx-auto grid w-[86%] grid-rows-[auto_auto_1fr] items-center gap-6">
        <Header theme={theme} setTheme={setTheme} />

        <div
          className={`w-full rounded-lg p-6 text-right text-4xl 
        ${text} ${
            theme === 'one'
              ? 'bg-one-bg-tertiary'
              : theme === 'two'
              ? 'bg-two-bg-tertiary'
              : 'bg-three-bg-tertiary'
          }`}
        >
          399,981s
        </div>
      </div>
    </div>
  );
}

export default App;
