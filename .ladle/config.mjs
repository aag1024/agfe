export default {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  addons: {
    theme: {
      enabled: true,
    },
    mode: {
      enabled: true,
    },
  },
  // Make sure CSS processing works the same way as in Vite
  cssPostprocessor: {
    order: ["postcss", "css"],
    cssOptions: {
      url: false,
      import: false,
    },
  },
};
