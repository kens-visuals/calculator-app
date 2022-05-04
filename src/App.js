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
      className={`grid min-h-screen grid-rows-[1fr_auto] font-spartan ${currTheme}`}
    >
      {/* grid-rows-[3rem_5rem_26rem] */}
      <div className="mx-auto grid w-[87%] max-w-[34rem] grid-rows-[3rem_5.5rem_26rem] content-center gap-6 md:grid-rows-[3rem_8rem_30rem]">
        <Header theme={theme} setTheme={setTheme} />

        <Body theme={theme} />
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
