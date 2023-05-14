/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["xsgames.co", "cdn-icons-png.flaticon.com"],
  },
  env: {
    // REACT_APP_BASE_URL: "https://flexiple-be.onrender.com",
    REACT_APP_BASE_URL: "http://localhost:4000",
  },
};

module.exports = nextConfig;
