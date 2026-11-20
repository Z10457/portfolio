console.log("postcss runs on", process.version, process.execPath);
const config = {
  // PostCSS processes your CSS; plugins is the list of transformations to apply
  plugins: {
    "@tailwindcss/postcss": {}, // turns Tailwind class names into real CSS (Tailwind v4 needs no tailwind.config file)
  },
};

export default config; // PostCSS (run by Next.js) loads this default export
