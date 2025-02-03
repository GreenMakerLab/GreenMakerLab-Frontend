/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '340px'
      },
      width: {
        '18': '68px', 
      },
      height:{
        '18': '72px',
      },
      colors: {
        'Humanitarian': '#F7A19F',
        'PreventWaste': '#F9B27E',
        'AtomEconomy': '#FCCE75',
        'LessHazardous': '#FDCE60',
        'MolecularDesign': '#FDEC94',
        'Solvents': '#DFFD8B',
        'Energy': '#9AED81',
        'Renewable': '#84FFCA',
        'Catalysis': '#87CBFF',
        'Degradation': '#96ACFD',
        'Measurement': '#AE95FB',
        'Frameworks': '#DBA5FE',
        'buttom': '#0166FF',
        'Market': '#F3A5FD',
        'Metrics': '#F890E3',
        'Policie': '#FF77CC',
        'Tools': '#F66F91',
        'Noble': '#F57064',
        'Periodic': "#3473A9"
      },
    },
  },
  plugins: [],
}

