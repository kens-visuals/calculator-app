module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout-1': 'repeat(5, minmax(auto, 4rem))',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        // Theme 1
        'one-bg-primary': 'hsl(222, 26%, 31%)',
        'one-bg-secondary': 'hsl(223, 31%, 20%)',
        'one-bg-tertiary': 'hsl(224, 36%, 15%)',
        'one-key-primary': 'hsl(225, 21%, 49%)',
        'one-key-primary--shadow': 'hsl(224, 28%, 35%)',
        'one-key-secondary': 'hsl(6, 63%, 50%)',
        'one-key-secondary--shadow': 'hsl(6, 70%, 34%)',
        'one-key-tertiary': 'hsl(30, 25%, 89%)',
        'one-key-tertiary--shadow': 'hsl(28, 16%, 65%)',
        'one-text-primary': 'hsl(221, 14%, 31%)',
        // Theme 2
        'two-bg-primary': 'hsl(0, 0%, 90%)',
        'two-bg-secondary': 'hsl(0, 5%, 81%)',
        'two-bg-tertiary': 'hsl(0, 0%, 93%)',
        'two-key-primary': 'hsl(185, 42%, 37%)',
        'two-key-primary--shadow': 'hsl(185, 58%, 25%)',
        'two-key-secondary': 'hsl(25, 98%, 40%)',
        'two-key-secondary--shadow': 'hsl(25, 99%, 27%)',
        'two-key-tertiary': 'hsl(45, 7%, 89%)',
        'two-key-tertiary--shadow': 'hsl(35, 11%, 61%)',
        'two-text-primary': 'hsl(60, 10%, 19%)',
        // Theme 3
        'three-bg-primary': 'hsl(268, 75%, 9%)',
        'three-bg-secondary': 'hsl(268, 71%, 12%)',
        'three-bg-tertiary': 'hsl(268, 71%, 12%)',
        'three-key-primary': 'hsl(281, 89%, 26%)',
        'three-key-primary--shadow': 'hsl(285, 91%, 52%)',
        'three-key-secondary': 'hsl(176, 100%, 44%)',
        'three-key-secondary--shadow': 'hsl(177, 92%, 70%)',
        'three-key-tertiary': 'hsl(268, 47%, 21%)',
        'three-key-tertiary--shadow': 'hsl(290, 70%, 36%)',
        'three-text-primary': 'hsl(52, 100%, 62%)',
      },
    },
  },
  plugins: [],
};
