/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // alterna adicionando/removendo 'dark' no <html>
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Claro (Boticário)
        'boticario-green': '#008060',
        'boticario-bg': '#e6f4f1',

        // Escuro (Koru)
        'koru-purple': '#8A2BE2',
        'koru-bg': '#1a0820',     // roxo bem escuro
        'koru-card': '#24102d',   // roxo-escuro para cards
      },
    },
  },
  plugins: [],
}
