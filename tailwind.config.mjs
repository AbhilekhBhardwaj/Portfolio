// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // For React projects
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        customBlueStart: "#09203F",
        customBlueEnd: "#537895",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    addVariablesForColors, // Custom plugin to add CSS variables for colors
  ],
};

// Plugin to add Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
}
