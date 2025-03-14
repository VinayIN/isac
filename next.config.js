module.exports = {
    images: {
      unoptimized: true,
      trailingSlash: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'primefaces.org'
        },
      ],
    },
    rewrites: async () => [
      {
        source: '/(.*)',
        destination: '/_app.js',
      },
    ],
  }