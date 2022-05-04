export default function Header({ theme, setTheme }) {
  const themes = ['one', 'two', 'three'];

  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const inputsDisplay = themes.map((t, i) => (
    <div key={t}>
      <input
        checked={theme === t}
        type="radio"
        id={t}
        value={t}
        name={t}
        onChange={(e) => setTheme(e.target.value)}
        className="appearance-none"
      />
      <span
        className={`absolute top-1/2 left-1 h-[1.1rem] w-[1.1rem] -translate-y-1/2 rounded-full ${
          theme === 'one'
            ? 'translate-x-0 bg-one-key-secondary/50'
            : theme === 'two'
            ? 'translate-x-7 bg-two-key-secondary/50'
            : 'translate-x-14 bg-three-key-secondary/50'
        }`}
      ></span>
    </div>
  ));

  const labelsDisplay = themes.map((t, i) => (
    <label
      key={t}
      htmlFor={t}
      className={`w-3 cursor-pointer text-center text-sm hover:opacity-70`}
    >
      {i + 1}
    </label>
  ));

  return (
    <header className="flex items-baseline justify-between">
      <h1 className={`text-4xl font-semibold tracking-wider ${text}`}>calc</h1>

      <div className="flex items-end gap-4">
        <span className={`text-sm uppercase tracking-widest ${text}`}>
          Theme
        </span>

        <div className="w-20">
          <div
            className={`absolute top-[1.45rem] z-10 flex items-center justify-between pl-[0.42rem] pr-[0.315rem] ${text} relative`}
          >
            {labelsDisplay}
          </div>

          <form
            action="#"
            className={`${
              theme === 'one'
                ? 'bg-one-bg-secondary'
                : theme === 'two'
                ? 'bg-two-bg-secondary'
                : 'bg-three-bg-secondary'
            } relative flex items-center justify-between rounded-full`}
          >
            {inputsDisplay}
          </form>
        </div>
      </div>
    </header>
  );
}
