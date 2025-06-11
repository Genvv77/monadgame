module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://*.farcaster.xyz https://farcaster.xyz;",
          },
        ],
      },
    ];
  },
};
