export default function Footer({ theme }) {
  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-key-secondary';

  const textLink =
    theme === 'one'
      ? 'text-one-key-secondary hover:text-white'
      : theme === 'two'
      ? 'text-two-key-primary hover:text-two-text-primary'
      : 'text-three-text-primary hover:text-three-key-secondary';

  return (
    <footer
      className={`m-4 text-center text-[.6rem] md:m-2 md:text-xs ${text}`}
    >
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className={`font-bold uppercase underline transition-all duration-300 ${textLink}`}
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/kens-visuals"
        target="_blank"
        rel="noreferrer"
        className={`font-bold uppercase underline transition-all duration-300 ${textLink}`}
      >
        Kens-Visuals
      </a>
    </footer>
  );
}
