import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"],      // for body font
        Poppins : ["Poppins", "sans-serif"],  //for heading
      },

      colors: {
        primary : {
          10 : "",
          20 : "#d946ef",
          30 : ''
      },
        neutral : {
          10 : "#010313",
          15 : "#CACACA",
          20 : "#ffffff0d"
        }
        ,
        border:{
          10:"#ffffff33",
          20:"#ffffff66"
        }
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(95deg, #FFFFFF 50.31%, rgba(230, 200, 255, 0.6) 110.92%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
