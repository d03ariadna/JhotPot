/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#FC6011',
        'second': '#11263c',
        'third': '#52616b',
        'fourth': '#f0f5f9',
        'fifth': '#c9d6df',
      },
      fontFamily: {
        light: 'Poppins_300Light',
        regular: 'Poppins-400Regular',
        medium: 'Poppins_500Medium',
        semibold: 'Poppins_600SemiBold',
        bold: 'Poppins_700Bold',
      },
    },
  },
  plugins: [],
}