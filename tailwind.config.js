/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en la línea gráfica activista (Ser Valiente en Red / Resiste Marika)
        brand: {
          dark:    '#102259', // Azul noche profundo para textos y secciones de contraste
          purple:  '#8C4C89', // Violeta principal
          deep:    '#524889', // Violeta medio / índigo
          magenta: '#CF39B2', // Fucsia / magenta brillante
          cyan:    '#07CAD1', // Turquesa / cian vibrante
          peach:   '#FFBC7D', // Durazno cálido
          yellow:  '#EDDC83', // Amarillo luz
          light:   '#FFF9FD', // Fondo blanco con toque lila muy suave
        },
        surface: {
          white: '#FFFFFF',
          soft:  '#F8F9FC',
          card:  '#FFFFFF',
          border:'#E5E7EB',
          text:  '#102259',
          muted: '#5B6790',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Poppins', 'sans-serif'],
        impact: ['Bebas Neue', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
