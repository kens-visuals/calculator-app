import { useState } from 'react';

// components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
      className={`grid min-h-screen grid-rows-[1fr_auto] py-20 font-spartan ${currTheme} md:p-0`}
    >
      <div className="mx-auto grid w-[86%] max-w-xs grid-rows-[3rem_5rem_26rem] gap-6 md:content-center">
        <Header theme={theme} setTheme={setTheme} />

        <Body theme={theme} />
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
