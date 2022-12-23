/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
}

// module.exports= nextConfig
