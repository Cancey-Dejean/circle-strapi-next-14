import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["stratos-lights", "sans-serif"],
      title: ["filson-pro", "sans-serif"],
      button: ["stratos", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
export default config
