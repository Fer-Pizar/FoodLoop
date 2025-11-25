export default ({ config }) => ({
  ...config,
  android: {
    ...config.android,
    package: "com.valedaza.foodloop",
  },
  extra: {
    ...config.extra,
    // URL de tu backend en Render
    BACKEND_URL: "https://foodloop-backend.onrender.com/api",
  },
});

