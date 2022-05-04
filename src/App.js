import { useState } from 'react';

// components
import Header from './components/Header';
import Body from './components/Body';
import Button from './components/Button'; // DEL

function App() {
  const [theme, setTheme] = useState('one');

  const currTheme =
    theme === 'one'
      ? 'bg-one-bg-primary'
      : theme === 'two'
      ? 'bg-two-bg-primary'
      : 'bg-three-bg-primary';

  return (
    <div
      className={`grid min-h-screen max-w-lg grid-rows-[1fr_auto] py-20 font-spartan ${currTheme}`}
    >
      <div className="mx-auto grid w-[86%] max-w-xs grid-rows-[3rem_5rem_26rem] gap-6">
        <Header theme={theme} setTheme={setTheme} />

        <Body theme={theme} />
      </div>
    </div>
  );
}

export default App;
