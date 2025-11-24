import "dotenv/config";

export default ({ config }) => ({
  ...config,

  android: {
    ...config.android,
    package: "com.valedaza.foodloop",
  },

  extra: {
    ...config.extra,
    BACKEND_URL: process.env.EXPO_PUBLIC_API_BASE,
  },
});
