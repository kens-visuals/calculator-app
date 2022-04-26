import { useState } from 'react';

// components
import Header from './components/Header';
import Button from './components/Button';

function App() {
  const [theme, setTheme] = useState('one');
  const [num, setNum] = useState(0);

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
      <div className="mx-auto grid w-[86%] grid-rows-[3rem_5rem_26rem]  gap-6">
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
          <span>{num}</span>
        </div>

        <div
          className={`grid grid-cols-4 grid-rows-layout content-center gap-3 rounded-lg px-6 py-3 ${
            theme === 'one'
              ? 'bg-one-bg-secondary'
              : theme === 'two'
              ? 'bg-two-bg-secondary'
              : 'bg-three-bg-secondary'
          }`}
        >
          <Button theme={theme} setNum={setNum}>
            7
          </Button>
          <Button theme={theme} setNum={setNum}>
            8
          </Button>
          <Button theme={theme} setNum={setNum}>
            9
          </Button>
          <Button theme={theme} setNum={setNum} otherStyle del>
            Del
          </Button>
          <Button theme={theme} setNum={setNum}>
            4
          </Button>
          <Button theme={theme} setNum={setNum}>
            5
          </Button>
          <Button theme={theme} setNum={setNum}>
            6
          </Button>
          <Button theme={theme} setNum={setNum}>
            +
          </Button>
          <Button theme={theme} setNum={setNum}>
            1
          </Button>
          <Button theme={theme} setNum={setNum}>
            2
          </Button>
          <Button theme={theme} setNum={setNum}>
            3
          </Button>
          <Button theme={theme}>-</Button>
          <Button theme={theme}>.</Button>
          <Button theme={theme}>0</Button>
          <Button theme={theme}>/</Button>
          <Button theme={theme}>x</Button>
          <Button theme={theme} otherStyle>
            Reset
          </Button>
          <Button theme={theme} equal>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
