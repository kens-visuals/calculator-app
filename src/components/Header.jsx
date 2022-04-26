export default function Header({ theme, setTheme }) {
  const themes = ['one', 'two', 'three'];

  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  const inputsDisplay = themes.map((t) => (
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
        className={`absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2 rounded-full ${
          theme === 'one'
            ? 'translate-x-0 bg-one-key-secondary'
            : theme === 'two'
            ? 'translate-x-7 bg-two-key-secondary'
            : 'translate-x-14 bg-three-key-secondary'
        }`}
      ></span>
    </div>
  ));

  const labelsDisplay = themes.map((t, i) => (
    <label
      key={t}
      htmlFor={t}
      className="w-3 cursor-pointer text-center hover:opacity-70"
    >
      {i + 1}
    </label>
  ));

  return (
    <header className="flex items-baseline justify-between">
      <h1 className={`text-4xl font-semibold ${text}`}>calc</h1>

      <div className="flex items-end gap-4">
        <span className={`text-sm uppercase ${text}`}>Theme</span>

        <div className="w-20">
          <div
            className={`flex items-center justify-between px-1.5 ${text} relative`}
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
