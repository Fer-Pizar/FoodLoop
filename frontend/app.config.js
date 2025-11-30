import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    BACKEND_URL: process.env.EXPO_PUBLIC_API_URL,
  },
});