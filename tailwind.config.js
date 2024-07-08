/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://media.istockphoto.com/id/585329112/vector/vintage-victorian-style-newspaper-design-template.jpg?s=1024x1024&w=is&k=20&c=m1ikc2DZP2zvmjo0h5UgxqSDWL4I6GhqaB3VVQ6yp1s=')",
      },
    },
    // screens: {
    //   'xs': {'max' : '640px'},
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    // colors : {
    //   lightBg : "#E2E8F0",
    //   lightBgPrimary : "#F8FAFC", 
    //   lightBgSecondary : "#0F172A",
    // }
  },
  plugins: [],
}

