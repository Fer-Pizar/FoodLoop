import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    // keep anything that was defined in app.json
    ...config.extra,
    // and then add/override your custom env variables
    BACKEND_URL: process.env.EXPO_PUBLIC_API_URL,
  },
});
