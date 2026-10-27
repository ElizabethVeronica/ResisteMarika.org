/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en las banderas Trans y No Binaria (NB) con balance serio e institucional
        brand: {
          // Bandera Trans (Celeste pastel y Rosa suave)
          sky:       '#5BCEFA', // Celeste trans vibrante
          skySoft:   '#78D5FA', // Celeste cielo pastel
          skyLight:  '#E6F7FE', // Fondo celeste muy suave
          pink:      '#F5A9B8', // Rosa trans dulce
          pinkSoft:  '#F9BDC9', // Rosa pastel suave
          pinkLight: '#FDF0F3', // Fondo rosa muy suave
          
          // Bandera No Binaria (Amarillo cálido, Lavanda / Morado disidente y Pizarra oscura)
          yellow:     '#FDE047', // Amarillo NB vivo
          yellowWarm: '#F6D860', // Amarillo cálido pastel
          yellowSoft: '#FEF9C3', // Amarillo luz suave
          purple:     '#8E5DB5', // Morado / lavanda NB principal
          purpleSoft: '#B48FCE', // Lavanda tierno
          purpleLight:'#F5EEFA', // Fondo lila muy sutil
          
          // Toque serio, sobrio y de alta legibilidad
          dark:       '#1E1A29', // Pizarra violeta profundo (base seria para textos principales)
          darkNavy:   '#161B2E', // Azul oscuro noche institucional para contrastes y footer
          charcoal:   '#2D2638', // Gris pizarra cálido
        },
        surface: {
          light: '#FCFAFE', // Fondo general limpio y suave
          card:  '#FFFFFF',
          border:'#EDE7F6', // Borde lavanda suave
          muted: '#635B73', // Texto secundario suave y legible
        },
      },
      fontFamily: {
        // Tipografías con suavidad, curvas amables, ternura y a la vez seriedad
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Nunito', 'sans-serif'],
        soft: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
