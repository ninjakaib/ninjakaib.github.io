/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Optional: If your repository name is different from username.github.io
  // basePath: '/ninjakaib.github.io',
};

export default nextConfig;
