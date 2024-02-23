// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*', // Replace with your backend URL
      },
    ];
  },
};

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/600x600/**',
      },
    ],
  },
}

module.exports = nextConfig;
