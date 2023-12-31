import type { Config } from "tailwindcss";

function withOpacity(variableName: string) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  safelist: [
    "pb-0",
    "pb-16",
    "pb-32",
    "pb-64",
    "md:pb-0",
    "md:pb-16",
    "md:pb-32",
    "md:pb-64",
    "pt-0",
    "pt-16",
    "pt-32",
    "pt-64",
    "md:pt-0",
    "md:pt-16",
    "md:pt-32",
    "md:pt-64",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      body: ["Roboto", "sans-serif"],
      secondary: ["Alegreya Sans SC", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      xs: [
        "1.2rem",
        {
          lineHeight: "1.6rem",
          fontWeight: "400",
        },
      ],
      sm: [
        "1.4rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "400",
        },
      ],
      base: [
        "1.6rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "400",
        },
      ],
      md: [
        "2rem",
        {
          lineHeight: "2.2rem",
          fontWeight: "400",
        },
      ],
      lg: [
        "2.4rem",
        {
          lineHeight: "3.2rem",
          fontWeight: "400",
        },
      ],
      xl: [
        "3.2rem",
        {
          lineHeight: "4rem",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "4rem",
        {
          lineHeight: "4.8rem",
          fontWeight: "400",
        },
      ],
      "3xl": [
        "4.8rem",
        {
          lineHeight: "5.4rem",
          fontWeight: "400",
        },
      ],
      "4xl": [
        "6.4rem",
        {
          lineHeight: "7rem",
          fontWeight: "400",
        },
      ],
      "5xl": [
        "7.2rem",
        {
          lineHeight: "7.8rem",
          fontWeight: "400",
        },
      ],
      "6xl": [
        "8.2rem",
        {
          lineHeight: "8.7rem",
          fontWeight: "400",
        },
      ],
      "7xl": [
        "9.6rem",
        {
          lineHeight: "10.2rem",
          fontWeight: "400",
        },
      ],
    },
    spacing: {
      px: "1px",
      0: "0px",
      1: "0.2rem",
      2: "0.4rem",
      3: "0.6rem",
      4: "0.8rem",
      5: "1rem",
      6: "1.2rem",
      7: "1.4rem",
      8: "1.6rem",
      9: "1.8rem",
      10: "2rem",
      11: "2.2rem",
      12: "2.4rem",
      13: "2.6rem",
      14: "2.8rem",
      15: "3rem",
      16: "3.2rem",
      17: "3.4rem",
      18: "3.6rem",
      19: "3.8rem",
      20: "4rem",
      21: "4.2rem",
      22: "4.4rem",
      23: "4.6rem",
      24: "4.8rem",
      25: "5rem",
      26: "5.2rem",
      27: "5.4rem",
      28: "5.6rem",
      29: "5.8rem",
      30: "6rem",
      31: "6.2rem",
      32: "6.4rem",
      33: "6.6rem",
      34: "6.8rem",
      35: "7rem",
      36: "7.2rem",
      37: "7.4rem",
      38: "7.6rem",
      39: "7.8rem",
      40: "8rem",
      41: "8.2rem",
      42: "8.4rem",
      43: "8.6rem",
      44: "8.8rem",
      45: "9rem",
      46: "9.2rem",
      47: "9.4rem",
      48: "9.6rem",
      49: "9.8rem",
      50: "10rem",
      51: "10.2rem",
      52: "10.4rem",
      53: "10.6rem",
      54: "10.8rem",
      55: "11rem",
      56: "11.2rem",
      57: "11.4rem",
      58: "11.6rem",
      59: "11.8rem",
      60: "12rem",
      61: "12.2rem",
      62: "12.4rem",
      63: "12.6rem",
      64: "12.8rem",
      65: "13rem",
      66: "13.2rem",
      67: "13.4rem",
      68: "13.6rem",
      69: "13.8rem",
      70: "14rem",
      71: "14.2rem",
      72: "14.4rem",
      73: "14.6rem",
      74: "14.8rem",
      75: "15rem",
    },
    textColor: {
      primary: withOpacity("--color-text-primary"),
      secondary: withOpacity("--color-text-secondary"),
      tertiary: withOpacity("--color-text-tertiary"),
      error: withOpacity("--color-bg-error"),
    },
    colors: {
      primary: withOpacity("--color-text-primary"),
      secondary: withOpacity("--color-text-secondary"),
      tertiary: withOpacity("--color-text-tertiary"),
      error: withOpacity("--color-bg-error"),
      notification: withOpacity("--color-bg-notification"),
      transparent: "transparent",
    },
    backgroundColor: {
      primary: withOpacity("--color-bg-primary"),
      secondary: withOpacity("--color-bg-secondary"),
      tertiary: withOpacity("--color-bg-tertiary"),
      error: withOpacity("--color-bg-error"),
      notification: withOpacity("--color-bg-notification"),
      transparent: "transparent",
    },
    borderColor: {
      primary: withOpacity("--color-bg-primary"),
      secondary: withOpacity("--color-bg-secondary"),
      tertiary: withOpacity("--color-bg-tertiary"),
      error: withOpacity("--color-bg-error"),
      notification: withOpacity("--color-bg-notification"),
      transparent: "transparent",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      square: "square",
    },
    extend: {
      maxWidth: {
        screen: "100vw",
      },
      minWidth: {
        screen: "100vw",
      },
      animation: {
        "ping-slow": "ping .75s linear infinite",
        gradient: "gradient 15s ease infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%", "background-size": "400% 400%" },
          "50%": { "background-position": "100% 50%", "background-size": "400% 400%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
