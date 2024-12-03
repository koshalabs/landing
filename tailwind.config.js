/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        twoLineFooterMarginBreak: '1370px',
        customHeroDiscoverButton: '1070px',
        footerPhoneBreak: '835px',
        koshaHeroBreak: '1183px',
        koshaListBreak: '1400px',
        koshaListGrid: '1150px',
        modalBreak: '750px',
        customRightPaddingModalBreak: '756px',
        partnershipArrowBreak: '388px',
      },
      colors: {
        koshaPink: "#DB3C9B",
        koshaBlack: "#1A223E",
        koshaGrey: "#3F3F3F",
        koshaBlue: "#0AABFD",
        koshaLink: "#0099E7",
        koshaLightGrey: "#A5A5A5",
        koshaBorder: "#C4CAD8",
        koshaGreyBg: "#F4F7F9",
        error: '#EC221F',
        placeholder: '#ACAFB1',
        inputBorder: '#D9D9D9',
        inputBorderHover: '#ACAFB1',
        koshaButtonHover: '#C2318A',
        koshaButtonActive: '#9A2563',
        koshaSecondaryButtonHover: '#FFEDF8',
        koshaSecondaryButtonActive: '#FCCEEA',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #DB3C9B, #0AABFD)',
      },
      textGradient: {
        'custom': 'linear-gradient(to right, #DB3C9B, #0AABFD)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to right, #DB3C9B, #0AABFD)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitTextFillColor: 'transparent',
        },
      });
    },
  ],
};
